/* @flow */
import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Seo from '../../../seo';
import { init } from '../../../actions/global';

import Detail from '../../../components/templates/discography/detail';

type Props = {
  init: () => void
};

const Discography = (props: Props) => {
  const {
    init
  } = props;

  useEffect(() => {
    init({
      pageName: 'DISCOGRAPHY',
      isSubPage: true,
      parentUrl: '/discography'
    });
    // unmount
    return () => null;
  }, []);

  return (
    <div>
      <Seo
        description="BUMP OF CHICKENオフィシャルサイト。ニュース、ディスコグラフィー、スタッフダイアリー、GOODS、PICSなど。"
        lang="ja"
        title="DISCOGRAPHY | BUMP OF CHICKEN official website"
      />
      <Detail />
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
)(Discography);
