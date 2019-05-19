/* @flow */
import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Seo from '../../seo';
import { init } from '../../actions/global';

import Top from '../../components/templates/live/top';

type Props = {
  init: () => void
};

const Live = (props: Props) => {
  const {
    init
  } = props;

  useEffect(() => {
    init({
      pageName: 'LIVE',
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
        title="LIVE | BUMP OF CHICKEN official website"
      />
      <Top />
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
)(Live);
