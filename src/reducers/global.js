/* @flow */
import produce from 'immer';

import { CLICK_MENU, SET_PAGE_NAME } from '../actions/global';

type State = {
  isOpen: boolean,
  pageName: string
};

const initialState: State = {
  isOpen: false,
  pageName: ''
};

export default (state = initialState, action) => produce(state,
  draft => {
    switch (action.type) {
      case CLICK_MENU:
        draft.isOpen = action.payload.isOpen;
        break;
      case SET_PAGE_NAME:
        draft.pageName = action.payload.pageName;
        break;
    }
  });
