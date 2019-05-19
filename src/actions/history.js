import { findIndex } from 'lodash';

import { RepositoryFactory } from '../services/repository-factory';

export const LOAD_JSON = '@@HISTORY/loadJSON';
export const CLICK_YEAR = '@@HISTORY/clickYear';
export const CLICK_NEXT_YEAR = '@@HISTORY/clickNextYear';
export const CLICK_PREV_YEAR = '@@HISTORY/clickPrevYear';

/**
 * json読み込み
 * @returns {Function}
 */
export const loadJSON = () => async (dispatch) => {
  dispatch({
    type: LOAD_JSON,
    payload: {
      isLoading: true,
      data: null,
      yearList: null
    }
  });
  const repository = RepositoryFactory.get('history');
  const { data } = await repository.get();
  const jsonData = data.data;
  const yearList = [];
  Object.keys(jsonData).forEach(key => yearList.push(parseInt(key, 10)));
  dispatch({
    type: LOAD_JSON,
    payload: {
      isLoading: false,
      data: jsonData,
      yearList
    }
  });
};

/**
 * 年箇所クリックされた
 * @param year
 * @returns {Function}
 */
export const clickYear = year => dispatch => {
  dispatch({
    type: CLICK_YEAR,
    payload: {
      currentYear: year
    }
  });
};

/**
 * pagerの次がクリックされたら
 * @returns {Function}
 */
export const clickNext = () => (dispatch, getState) => {

  const { history } = getState();
  const { currentYear, yearList } = history;
  const now = currentYear.length === 0 ? yearList[0] : currentYear;
  const index = findIndex(yearList, year => year === now);
  if (index !== 0) {
    dispatch({
      type: CLICK_NEXT_YEAR,
      payload: {
        currentYear: yearList[index - 1]
      }
    });
  }
};

/**
 * pagerの前がクリックされたら
 * @returns {Function}
 */
export const clickPrev = () => (dispatch, getState) => {
  const { history } = getState();
  const { currentYear, yearList } = history;
  // currentYearが初期値 '' なのでその場合はyearListから取得する
  const now = currentYear.length === 0 ? yearList[0] : currentYear;
  const index = findIndex(yearList, year => year === now);
  const last = yearList.length - 1;
  if (index !== last) {
    dispatch({
      type: CLICK_PREV_YEAR,
      payload: {
        currentYear: yearList[index + 1]
      }
    });
  }
};
