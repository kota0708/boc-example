import { RepositoryFactory } from '../services/repository-factory';

export const LOAD_NEWS_TOP_JSON = '@@NEWS/loadNewsTopJson';
export const LOAD_NEWS_DETAIL = '@@NEWS/loadNewsDetail';

const repository = RepositoryFactory.get('news');

/**
 * newsトップ用のJSONを読み込みさせる
 * @returns {Function}
 */
export const loadTopJson = () => async (dispatch) => {
  dispatch({
    type: LOAD_NEWS_TOP_JSON,
    payload: {
      isLoading: true,
      topData: null
    }
  });
  const { data } = await repository.getTop();
  dispatch({
    type: LOAD_NEWS_TOP_JSON,
    payload: {
      isLoading: false,
      topData: data
    }
  });
};

/**
 * 詳細のJSON読む
 * @returns {Function}
 */
export const loadDetailJson = () => async (dispatch) => {
  dispatch({
    type: LOAD_NEWS_DETAIL,
    payload: {
      isLoading: true,
      detailData: null
    }
  });
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  const { data } = await repository.get(id);
  dispatch({
    type: LOAD_NEWS_DETAIL,
    payload: {
      isLoading: false,
      detailData: data
    }
  });
};
