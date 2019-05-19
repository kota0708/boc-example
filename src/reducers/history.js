import produce from 'immer';

import {
  LOAD_JSON,
  CLICK_YEAR,
  CLICK_NEXT_YEAR,
  CLICK_PREV_YEAR
} from '../actions/history';

const initialState = {
  isLoading: false,
  data: null,
  yearList: null, // 年のやつ Array<string>
  currentYear: ''
};

export default (state = initialState, action) => produce(state,
  draft => {
    switch (action.type) {
      case LOAD_JSON:
        draft.isLoading = action.payload.isLoading;
        draft.data = action.payload.data;
        draft.yearList = action.payload.yearList;
        break;
      case CLICK_YEAR:
      case CLICK_PREV_YEAR:
      case CLICK_NEXT_YEAR:
        draft.currentYear = action.payload.currentYear;
        break;
    }
  });
