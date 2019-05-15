import { RepositoryFactory } from '../services/repository-factory';

export const OPEN_PHOTO_DETAIL = '@@PHOTO/openPhotoDetail';
export const CLOSE_PHOTO_DETAIL = '@@PHOTO/closePhotoDetail';
export const RESET_PHOTO_DETAIL = '@@PHOTO/resetPhotoDetail';
export const GET_LIVE_ID = '@@PHOTO/getLiveId';
export const LOAD_JSON = '@@PHOTO/LOAD_JSON';
export const RESET_PHOTO_LIST = '@@PHOTO/resetPhotoList';

/**
 * モーダル出現
 * @returns {Function}
 */
export const openPhotoDetail = (selectedPhotoId, albumId) => dispatch => {
  dispatch({
    type: OPEN_PHOTO_DETAIL,
    payload: {
      selectedPhotoId,
      albumId,
      isModal: true
    }
  });
};

/**
 * モーダル消す
 * @returns {Function}
 */
export const closePhotoDetail = () => dispatch => {
  dispatch({
    type: CLOSE_PHOTO_DETAIL,
    payload: {
      isModal: false
    }
  });
};

/**
 * モーダル周りで使用してるstateをリセットさせる。
 * @returns {Function}
 */
export const resetModal = () => dispatch => {
  dispatch({
    type: RESET_PHOTO_DETAIL,
    payload: {
      selectedPhotoId: '',
      albumId: '',
      selectedAlbum: null
    }
  });
};

/**
 * URL上からliveIdをパースする
 * @returns {Function}
 */
export const getLiveIdByUrl = () => dispatch => {
  const params = new URLSearchParams(window.location.search);
  dispatch({
    type: GET_LIVE_ID,
    payload: {
      liveId: params.get('id')
    }
  });
};

/**
 * 写真リストのJSONを読み込むさせる
 * @returns {Function}
 */
export const loadJSON = (cb) => async (dispatch, getState) => {
  const { photo } = getState();
  dispatch({
    type: LOAD_JSON,
    payload: {
      isLoading: true,
      listData: null
    }
  });
  const { liveId } = photo;
  const repo = RepositoryFactory.get('photo');
  const { data } = await repo.get(liveId);
  dispatch({
    type: LOAD_JSON,
    payload: {
      isLoading: false,
      listData: data
    }
  });
  cb(data);
};

/**
 * 写真リストページ(photo/list）から離脱するときにたたくよう。
 * @returns {Function}
 */
export const resetPhotoList = () => dispatch => {
  dispatch({
    type: RESET_PHOTO_LIST,
    payload: {
      isLoading: true,
      listData: null,
      liveId: ''
    }
  });
};
