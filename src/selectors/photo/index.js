import { createSelector } from 'reselect';

const selectPhoto = state => state.photo;

/**
 * モーダル表示かどうかを返す
 * @returns {boolean}
 */
const makeIsModal = () => createSelector(selectPhoto, state => state.isModal);

/**
 * アルバム情報返す
 * @returns {object}
 */
const makeSelectedLiveAlbum = () => createSelector(
  selectPhoto,
  state => {
    const { albumId, listData } = state;
    // const liveData = getAlbumData(liveId);
    return listData ? listData.data.filter(d => d.id === albumId)[0] : null;
  }
);


/**
 * live idを返す
 * @returns {string}
 */
const makeSelectLiveId = () => createSelector(
  selectPhoto,
  state => state.liveId
);

/**
 * 選択された画像のindex値を返す
 * @returns {number}
 */
const makeSelectPhotoIndex = () => createSelector(
  selectPhoto,
  state => {
    const {
      selectedPhotoId, albumId, listData
    } = state;
    if (albumId.length === 0 || selectedPhotoId.length === 0) {
      return -1;
    }
    // const liveData = getAlbumData(liveId);
    const { data } = listData;
    const photo = data.filter(d => d.id === albumId);
    if (photo.length === 0) {
      return -1;
    }
    return photo[0].photos.findIndex(p => p.id === selectedPhotoId);
  }
);

/**
 * ローディング状態を返す
 * @returns {boolean}
 */
const makeSelectIsLoading = () => createSelector(selectPhoto, state => state.isLoading);

/* eslint-disable import/prefer-default-export */
export {
  makeSelectLiveId,
  makeSelectPhotoIndex,
  makeIsModal,
  makeSelectedLiveAlbum,
  // makeSelectListData,
  makeSelectIsLoading
  // makeSelectAlbumData
};
