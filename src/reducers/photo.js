/* @flow */
import produce from 'immer';

import {
  CLOSE_PHOTO_DETAIL,
  OPEN_PHOTO_DETAIL,
  RESET_PHOTO_DETAIL,
  GET_LIVE_ID,
  LOAD_JSON
} from '../actions/photo';

type State = {
  selectedPhotoId: string,
  albumId: string, // 選択されたアルバムID
  selectedAlbum: Array, // 選択されたアルバムのデータ配列
  isModal: boolean,
  liveId: string, // ライブのID（pathfinderとか）
  isLoading: boolean, // JSONの読み込み
  data: Object // JSONの返り値（仮）todo: 消す
};

const initialState: State = {
  selectedPhotoId: '',
  albumId: '',
  selectedAlbum: null,
  isModal: false,
  liveId: '',
  isLoading: true,
  listData: null
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
        // draft.liveId = action.payload.liveId;
        break;
      case GET_LIVE_ID:
        draft.liveId = action.payload.liveId;
        break;
      case LOAD_JSON:
        draft.isLoading = action.payload.isLoading;
        draft.listData = action.payload.listData;
        break;
    }
  });
