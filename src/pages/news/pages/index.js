/* @flow */
import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';

import Seo from '../../../seo';
import { init } from '../../../actions/global';
import { loadDetailJson } from '../../../actions/news';

import Page from '../../../components/templates/news/page';
import type { TNewsDetail } from '../../../flow';

type Props = {
  init: () => void,
  loadDetailJson: () => void,
  detailData: TNewsDetail,
  isLoading: boolean
};

const NewsDetail = (props: Props) => {
  const {
    init,
    loadDetailJson,
    detailData,
    isLoading
  } = props;
  useEffect(() => {
    init({
      pageName: 'NEWS',
      isSubPage: true,
      parentUrl: '/news/'
    });

    if (detailData === null && !isLoading) {
      loadDetailJson();
    }

    // unmount
    return () => null;
  }, []);

  // todo: loadingは入れて。
  const contents = detailData ? (
    <Page pageData={detailData} />
  ) : <div>loading...</div>;
  return (
    <div>
      <Seo
        description="BUMP OF CHICKENオフィシャルサイト。ニュース、ディスコグラフィー、スタッフダイアリー、GOODS、PICSなど。"
        lang="ja"
        title="NEWS | BUMP OF CHICKEN official website"
      />
      <CSSTransition
        in={!!(detailData !== null)}
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
  detailData: state.news.detailData,
  isLoading: state.news.isLoading
});
const mapDispatchToProps = dispatch => bindActionCreators({
  init,
  loadDetailJson
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewsDetail);
