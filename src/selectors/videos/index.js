import { createSelector } from 'reselect';

const selectVideos = state => state.videos;

/**
 * ローディング状態を返す
 * @returns {boolean}
 */
const makeSelectedIsLoading = () => createSelector(selectVideos, state => state.isLoading);
/**
 * JSONのdata返す
 * @returns {OutputSelector<any, *, (res: (Function|{get})) => *>}
 */
const makeSelectedJsonData = () => createSelector(selectVideos, state => state.data);

/**
 * URLのidからJSON内のIDを紐づけてその部分だけ取り出す
 * @returns {OutputSelector<any, any, (res: (Function|{get})) => any>}
 */
const makeSelectedDetailData = () => createSelector(selectVideos, state => {
  const { data } = state;
  if (data === null) {
    return null;
  }
  const jsonData = data.data;
  if (data && jsonData) {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    const selectedData = jsonData.filter(d => d.id === id);
    return selectedData.length > 0 ? selectedData[0] : null;
  }
  return null;
});


/* eslint-disable import/prefer-default-export */
export {
  makeSelectedIsLoading,
  makeSelectedJsonData,
  makeSelectedDetailData
};
