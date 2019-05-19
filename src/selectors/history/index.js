import { createSelector } from 'reselect';
import { findIndex } from 'lodash';

const selectHistory = state => state.history;

/**
 * loading状態を返す
 * @returns {boolean}
 */
const makeSelectedIsLoading = () => createSelector(selectHistory, state => state.isLoading);

/**
 * jsonのデータ
 * @returns {Object}
 */
const makeSelectedJsonData = () => createSelector(selectHistory, state => state.data);

/**
 * 選択している年から現在のデータだけを返す
 * @returns {THistory}
 */
const makeSelectedCurrentData = () => createSelector(
  selectHistory,
  state => {
    const { data, yearList, currentYear } = state;
    if (data === null) {
      return null;
    }

    if (currentYear.length === 0) {
      return data[yearList[0]];
    }
    return data[currentYear];
  }
);

/**
 * yearのリスト返す
 * @returns {Array<string>}
 */
const makeSelectedYearList = () => createSelector(
  selectHistory,
  state => {
    // jsonデータ
    const { yearList } = state;
    if (yearList === null || yearList.length === 0) {
      return null;
    }
    // 降順にして配列で返す
    return yearList.sort((a, b) => (a < b ? 1 : -1));
  }
);

/**
 * クリックされた（選択されたときの年を返す）
 * @returns {string}
 */
const makeSelectedYear = () => createSelector(
  selectHistory,
  state => {
    const { currentYear, yearList } = state;
    // jsonが読まれてないので''を返しておく（デフォ値）
    if (yearList === null) {
      return '';
    }
    // 仮にJSONが読まれていてかつまだクリックで年を選択してない場合はyearListの0番目を返す（最新の年）
    if (currentYear.length === 0) {
      return yearList[0];
    }
    // ここに来るのはAction内のclickで設定されてるはずなのでそのまま返してあげる
    return currentYear;
  }
);

/**
 * 選択されてる年の前の年を返す（pager用）
 * @returns {string}
 */
const makeSelectedPrevYear = () => createSelector(
  selectHistory,
  state => {
    const { currentYear, yearList } = state;
    // 何も無い場合は空返す
    // 下記の状態はJSON読まれてない状態。
    if (yearList === null || yearList.length === 0) {
      return '';
    }
    let selectedYear = currentYear;
    // 初期読み込み時
    if (selectedYear.length === 0) {
      /* eslint-disable prefer-destructuring */
      selectedYear = yearList[0];
    }

    const num = yearList.length - 1;
    const index = findIndex(yearList, a => a === selectedYear);
    // 最後なので空返す
    if (index === num) {
      return '';
    }
    return yearList[index + 1].toString();
  }
);

/**
 * 選択されてる年の次の年を返す（pager用）
 * @returns {string}
 */
const makeSelectedNextYear = () => createSelector(
  selectHistory,
  state => {
    const { currentYear, yearList } = state;
    // 何も無い場合は空返す
    // 下記の状態はJSON読まれてない状態。
    if (yearList === null || yearList.length === 0) {
      return '';
    }
    let selectedYear = currentYear;
    // 初期読み込み時
    if (selectedYear.length === 0) {
      /* eslint-disable prefer-destructuring */
      selectedYear = yearList[0];
    }
    const index = findIndex(yearList, a => a === selectedYear);
    if (index <= 0) {
      return '';
    }
    return yearList[index - 1].toString();
  }
);

/* eslint-disable import/prefer-default-export */
export {
  makeSelectedIsLoading,
  makeSelectedCurrentData,
  makeSelectedYearList,
  makeSelectedJsonData,
  makeSelectedYear,
  makeSelectedPrevYear,
  makeSelectedNextYear
};
