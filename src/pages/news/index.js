/* @flow */

import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';

import Seo from '../../seo';
import { init } from '../../actions/global';
import { loadTopJson } from '../../actions/news';

import NewsTop from '../../components/templates/news/top';
import type { TNewsList, TNewsPickup } from '../../flow';

type TTopData = {
  pickup: Array<TNewsPickup>,
  list: Array<TNewsList>
};

type Props = {
  init: () => void, // 初期化
  loadTopJson: () => void, // news.json読み込むよう
  topData: TTopData,
  isLoading: boolean
};

const News = (props: Props) => {
  const {
    init,
    loadTopJson,
    topData,
    isLoading
  } = props;
  useEffect(() => {
    init({
      pageName: 'NEWS',
      isSubPage: false,
      parentUrl: ''
    });
    // json読む
    if (topData === null && !isLoading) {
      loadTopJson();
    }
    // unmount
    return () => null;
  }, []);
  // todo: loadingは入れて。
  const contents = topData ? (
    <NewsTop pickUpData={topData.pickup} listData={topData.list} />
  ) : <div>loading...</div>;
  return (
    <div>
      <Seo
        description="BUMP OF CHICKENオフィシャルサイト。ニュース、ディスコグラフィー、スタッフダイアリー、GOODS、PICSなど。"
        lang="ja"
        title="NEWS | BUMP OF CHICKEN official website"
      />
      <CSSTransition
        in={!!(topData !== null)}
        mountOnEnter
        unmountOnExit
        timeout={600}
        classNames="fade"
      >
        {contents}
      </CSSTransition>

    </div>
  );
};


const mapStateToProps = state => ({
  isLoading: state.news.isLoading,
  topData: state.news.topData
});
const mapDispatchToProps = dispatch => bindActionCreators({
  init,
  loadTopJson
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(News);
