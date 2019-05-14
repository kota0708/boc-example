/* @flow */
import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Seo from '../../seo';
import Layout from '../../layout';
import { init } from '../../actions/global';

import PhotoTop from '../../components/templates/photo';

type Props = {
  init: () => void
};

const Photos = (props: Props) => {
  const { init } = props;
  useEffect(() => {
    init({
      pageName: 'PHOTOS',
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
        title="BUMP OF CHICKEN official website"
      />
      <Layout>
        <PhotoTop />
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
)(Photos);
