/* @flow */
import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Seo from '../seo';
import Layout from '../layout';
import { init } from '../actions/global';

import HistoryTemplate from '../components/templates/history';

type Props = {
  init: () => void
};

const History = (props: Props) => {
  const {
    init
  } = props;

  useEffect(() => {
    init({
      pageName: 'HISTORY',
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
        title="History | BUMP OF CHICKEN official website"
      />
      <Layout>
        <HistoryTemplate />
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
)(History);
