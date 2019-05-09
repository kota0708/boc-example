/* @flow */
import produce from 'immer';

import {
  CLOSE_PHOTO_DETAIL,
  OPEN_PHOTO_DETAIL,
  RESET_PHOTO_DETAIL
} from '../actions/photo';

type State = {
  selectedPhotoId: string,
  albumId: string, // 選択されたアルバムID
  selectedAlbum: Array, // 選択されたアルバムのデータ配列
  isModal: boolean
};

const initialState: State = {
  selectedPhotoId: '',
  albumId: '',
  selectedAlbum: null,
  isModal: false
};

export default (state = initialState, action) => produce(state,
  draft => {
    switch (action.type) {
      case OPEN_PHOTO_DETAIL:
        draft.selectedPhotoId = action.payload.selectedPhotoId;
        draft.albumId = action.payload.albumId;
        draft.isModal = action.payload.isModal;
        break;
      case CLOSE_PHOTO_DETAIL:
        draft.isModal = action.payload.isModal;
        break;
      case RESET_PHOTO_DETAIL:
        draft.selectedPhotoId = action.payload.selectedPhotoId;
        draft.albumId = action.payload.albumId;
        draft.selectedAlbum = action.payload.selectedAlbum;
        break;
    }
  });
