/* @flow */

import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Seo from '../../seo';
import Layout from '../../layout';
import { init } from '../../actions/global';

import NewsTop from '../../components/templates/news/top';

type Props = {
  init: () => void
};

const News = (props: Props) => {
  const { init } = props;
  console.log('news ---->');
  console.log(props);
  useEffect(() => {
    init({
      pageName: 'NEWS',
      isSubPage: false,
      parentUrl: ''
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
        <NewsTop />
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
)(News);
