/* @flow */
import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Seo from '../../seo';
import { init } from '../../actions/global';
import {
  loadJSON,
  clickYear,
  clickNext,
  clickPrev
} from '../../actions/history';
import {
  makeSelectedIsLoading,
  makeSelectedCurrentData,
  makeSelectedYearList,
  makeSelectedJsonData,
  makeSelectedYear,
  makeSelectedPrevYear,
  makeSelectedNextYear
} from '../../selectors/history';

import HistoryTemplate from '../../components/templates/history';

type Props = {
  init: () => void,
  loadJSON: () => void, // json読むよう
  clickYear: () => void, // 年クリックされたとき
  clickNext: () => void, // 次へボタン押された時
  clickPrev: () => void, // 前へボタン押された時
  currentData: any,
  jsonData: any, // jsonのdata
  isLoading: boolean, // loading中かどうか
  yearList: Array<number>,
  currentYear: string, // 選択中の年
  prevYear: string,
  nextYear: string
};

const History = (props: Props) => {
  const {
    init,
    loadJSON,
    isLoading,
    currentData,
    yearList,
    jsonData,
    clickYear,
    clickNext,
    clickPrev,
    currentYear,
    prevYear,
    nextYear
  } = props;

  useEffect(() => {
    init({
      pageName: 'HISTORY',
      isSubPage: false,
      parentUrl: ''
    });
    // jsonのデータが無いので取りに行かせる
    if (jsonData === null && !isLoading) {
      loadJSON();
    }
    // unmount
    return () => null;
  }, []);

  const contents = (currentData && yearList) ? (
    <HistoryTemplate
      yearList={yearList}
      data={currentData}
      onClick={clickYear}
      onNext={clickNext}
      onPrev={clickPrev}
      currentYear={currentYear}
      nextYear={nextYear}
      prevYear={prevYear}
    />
  ) : (
    <div>loading....</div>
  );
  return (
    <div>
      <Seo
        description="BUMP OF CHICKENオフィシャルサイト。ニュース、ディスコグラフィー、スタッフダイアリー、GOODS、PICSなど。"
        lang="ja"
        title="History | BUMP OF CHICKEN official website"
      />
      {contents}
    </div>
  );
};

const mapStateToProps = () => createStructuredSelector({
  isLoading: makeSelectedIsLoading(),
  jsonData: makeSelectedJsonData(),
  currentData: makeSelectedCurrentData(),
  yearList: makeSelectedYearList(),
  currentYear: makeSelectedYear(),
  prevYear: makeSelectedPrevYear(),
  nextYear: makeSelectedNextYear()
});
const mapDispatchToProps = dispatch => bindActionCreators({
  init,
  loadJSON,
  clickYear,
  clickNext,
  clickPrev
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(History);
