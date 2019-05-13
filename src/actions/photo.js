export const OPEN_PHOTO_DETAIL = '@@PHOTO/openPhotoDetail';
export const CLOSE_PHOTO_DETAIL = '@@PHOTO/closePhotoDetail';
export const RESET_PHOTO_DETAIL = '@@PHOTO/resetPhotoDetail';

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
