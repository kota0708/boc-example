/* @flow */
import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Seo from '../../../seo';
import Layout from '../../../layout';
import { init } from '../../../actions/global';

import Page from '../../../components/templates/news/page';

type Props = {
  init: () => void
};

const NewsDetail = (props: Props) => {
  const { init } = props;
  useEffect(() => {
    init({
      pageName: 'NEWS',
      isSubPage: true,
      parentUrl: '/news/'
    });
    // unmount
    return () => null;
  }, []);
  return (
    <div>
      <Seo
        description="BUMP OF CHICKENオフィシャルサイト。ニュース、ディスコグラフィー、スタッフダイアリー、GOODS、PICSなど。"
        lang="ja"
        title="NEWS | BUMP OF CHICKEN official website"
      />
      <Layout>
        <Page />
      </Layout>
    </div>
  );

};


const mapStateToProps = () => ({});
const mapDispatchToProps = dispatch => bindActionCreators({
  init
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewsDetail);
