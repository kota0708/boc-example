import { RepositoryFactory } from '../services/repository-factory';

export const LOAD_JSON = '@VIDEOS/loadJson';
export const RESET = '@VIDEOS/reset';

/**
 * JSON読み込み
 * @param cb
 * @returns {Function}
 */
export const loadJSON = (cb) => async (dispatch) => {
  dispatch({
    type: LOAD_JSON,
    payload: {
      isLoading: true,
      data: null
    }
  });
  const repo = RepositoryFactory.get('videos');
  const { data } = await repo.get();
  dispatch({
    type: LOAD_JSON,
    payload: {
      isLoading: false,
      data
    }
  });
  if (cb !== null && typeof cb === 'function') {
    cb(data);
  }
};

export const reset = () => dispatch => {
  dispatch({
    type: RESET,
    payload: {
      isLoading: true,
      data: null
    }
  });
};
