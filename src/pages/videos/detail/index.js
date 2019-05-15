/* @flow */
import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { init } from '../../../actions/global';
import { loadJSON } from '../../../actions/videos';
import Seo from '../../../seo';
import Layout from '../../../layout';
import { makeSelectedDetailData, makeSelectedJsonData } from '../../../selectors/videos';
import carouselData from '../../../constants/stub/top/carousel';
import VideosDetailTemplates from '../../../components/templates/videos/videos-detail-templates';

type Props = {
  init: () => void,
  loadJSON: () => void,
  jsonData: Object, // videos/data.jsonの内容
  selectedData: Object
};

const VideosDetail = (props: Props) => {
  const {
    init,
    loadJSON,
    jsonData,
    selectedData
  } = props;

  useEffect(() => {
    init({
      pageName: 'VIDEOS',
      isSubPage: true,
      parentUrl: '/videos/'
    });

    if (jsonData === null) {
      loadJSON();
    }

    // unmount
    return () => null;
  }, []);
  const video = selectedData ? (
    <VideosDetailTemplates
      caouselData={carouselData.date}
      data={selectedData}
    />
  ) : null;

  return (
    <div>
      <Seo
        description="BUMP OF CHICKENオフィシャルサイト。ニュース、ディスコグラフィー、スタッフダイアリー、GOODS、PICSなど。"
        lang="ja"
        title="BUMP OF CHICKEN official website"
      />
      <Layout>
        {video}
      </Layout>
    </div>
  );
};

const mapStateToProps = () => createStructuredSelector({
  jsonData: makeSelectedJsonData(),
  selectedData: makeSelectedDetailData()
});
const mapDispatchToProps = dispatch => bindActionCreators({
  init,
  loadJSON
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VideosDetail);
