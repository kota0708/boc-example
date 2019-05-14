/* @flow */
import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Seo from '../seo';
import Layout from '../layout';
import { init } from '../actions/global';

type Props = {
  init: () => void
};

const Videos = (props: Props) => {
  const {
    init
  } = props;

  useEffect(() => {
    init({
      pageName: 'VIDEOS',
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
        title="VIDEOS | BUMP OF CHICKEN official website"
      />
      <Layout>
        Videos!!
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
)(Videos);
