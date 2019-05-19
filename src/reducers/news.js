import produce from 'immer';
import { LOAD_NEWS_DETAIL, LOAD_NEWS_TOP_JSON } from '../actions/news';

const initialState = {
  isLoading: false,
  topData: null,
  detailData: null
};

export default (state = initialState, action) => produce(state,
  draft => {
    switch (action.type) {
      case LOAD_NEWS_TOP_JSON:
        draft.isLoading = action.payload.isLoading;
        draft.topData = action.payload.topData;
        break;
      case LOAD_NEWS_DETAIL:
        draft.isLoading = action.payload.isLoading;
        draft.detailData = action.payload.detailData;
        break;
    }
  });
