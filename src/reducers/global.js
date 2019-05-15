/* @flow */
import produce from 'immer';

import {
  CLICK_MENU,
  INIT,
  SET_PAGE_NAME,
  CLICK_LOGO
} from '../actions/global';

type State = {
  isOpen: boolean,
  pageName: string,
  isSubPage: boolean, // 中ページかどうか
  parentUrl: string // 親ページのURL
};

const initialState: State = {
  isOpen: false,
  pageName: '',
  isSubPage: false,
  parentUrl: ''
};

export default (state = initialState, action) => produce(state,
  draft => {
    switch (action.type) {
      case CLICK_MENU:
      case CLICK_LOGO:
        draft.isOpen = action.payload.isOpen;
        break;
      case SET_PAGE_NAME:
        draft.pageName = action.payload.pageName;
        break;
      case INIT:
        draft.pageName = action.payload.pageName;
        draft.isSubPage = action.payload.isSubPage;
        draft.parentUrl = action.payload.parentUrl;
        break;
    }
  });
