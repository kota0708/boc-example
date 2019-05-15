/* @flow */
import produce from 'immer';

import { LOAD_JSON } from '../actions/videos';

type State = {
  isLoading: boolean, // ローディング出すうよう
  data: Object // jsonの中身
};

const initialState: State = {
  isLoading: true,
  data: null
};


export default (state = initialState, action) => produce(state,
  draft => {
    switch (action.type) {
      case LOAD_JSON:
        draft.isLoading = action.payload.isLoading;
        draft.data = action.payload.data;
        break;
    }
  });
