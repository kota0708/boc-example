/* @flow */
import React, { useEffect, useState } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { reduce } from 'lodash';
import { CSSTransition } from 'react-transition-group';

import Seo from '../../../seo';
import Layout from '../../../layout';
import { init } from '../../../actions/global';
import {
  getLiveIdByUrl,
  openPhotoDetail,
  closePhotoDetail,
  resetModal,
  loadJSON
} from '../../../actions/photo';
import {
  makeSelectLiveId,
  makeSelectPhotoIndex,
  makeIsModal,
  makeSelectedLiveAlbum,
  makeSelectIsLoading
} from '../../../selectors/photo';

import PhotoTemplate from '../../../components/templates/photo/photo-template';
import PhotoDetail from '../../../components/templates/photo/photo-detail';

type Props = {
  init: () => void, // 初期化
  getLiveIdByUrl: () => void, // URLからliveId取得
  openPhotoDetail: () => void,
  resetModal: () => void,
  closePhotoDetail: () => void,
  /* eslint-disable react/no-unused-prop-types */
  loadJSON: () => void,
  /* eslint-disable react/no-unused-prop-types */
  liveId: string,
  isModal: boolean,
  selectedIndex: number,
  selectedLive: Object,
  isLoading: boolean
  /* ,
  selectedAlbumData: Object */
};

const PhotoListPage = (props: Props) => {
  const {
    init,
    openPhotoDetail,
    resetModal,
    closePhotoDetail,
    selectedIndex,
    isModal,
    selectedLive,
    liveId,
    getLiveIdByUrl,
    isLoading,
    loadJSON
  } = props;

  const [photoData, getJSON] = useState(null);
  useEffect(() => {
    init({
      pageName: 'PHOTOS',
      isSubPage: true,
      parentUrl: '/photos/'
    });
    if (liveId.length === 0) {
      getLiveIdByUrl();
    }
    if (isLoading) {
      loadJSON((data) => getJSON(data));
    }
    return () => null;
  }, []);

  const amount = photoData
    ? reduce(photoData.data, (a, b) => a + b.photos.length, 0)
    : 0;
  const title = photoData ? photoData.title : '';
  const template = photoData !== null ? (
    <PhotoTemplate
      title={title}
      amount={amount}
      photo={photoData.data}
      openDetail={openPhotoDetail}
      liveId={liveId}
    />
  ) : null;
  return (
    <div>
      <Seo
        description="BUMP OF CHICKENオフィシャルサイト。ニュース、ディスコグラフィー、スタッフダイアリー、GOODS、PICSなど。"
        lang="ja"
        title={`PHOTOS ${title} | BUMP OF CHICKEN official website`}
      />
      <Layout>
        {template}
        <CSSTransition
          in={isModal}
          mountOnEnter
          unmountOnExit
          timeout={600}
          classNames="fade"
          onExited={() => resetModal()}
        >
          <PhotoDetail
            photoData={selectedLive}
            onClose={closePhotoDetail}
            index={selectedIndex}
          />
        </CSSTransition>
      </Layout>
    </div>
  );
};

const mapStateToProps = () => createStructuredSelector({
  liveId: makeSelectLiveId(),
  selectedIndex: makeSelectPhotoIndex(),
  isModal: makeIsModal(),
  selectedLive: makeSelectedLiveAlbum(),
  isLoading: makeSelectIsLoading()
});
const mapDispatchToProps = dispatch => bindActionCreators({
  init,
  getLiveIdByUrl,
  openPhotoDetail,
  resetModal,
  closePhotoDetail,
  loadJSON
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoListPage);
