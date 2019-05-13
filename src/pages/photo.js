/* @flow */
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { CSSTransition } from 'react-transition-group';

import Seo from '../seo';
import Layout from '../layout';
import PhotoTemplate from '../components/templates/photo/photo-template';
import PhotoDetail from '../components/templates/photo/photo-detail';
import { setPageName } from '../actions/global';
import { openPhotoDetail, closePhotoDetail, resetModal } from '../actions/photo';
import {
  makeSelectPhotoIndex,
  makeSelectedAlbum,
  makeIsModal
} from '../selectors/photo';

type Props = {
  openPhotoDetail: () => void,
  closePhotoDetail: () => void,
  resetModal: () => void,
  selectedAlbum: Object,
  isModal: boolean,
  selectedIndex: number,
  setPageName: () => void
};

/**
 * @class Photo
 * フォトページの親クラス。
 * 基本的にここがReduxに通す感じ。
 */
class Photo extends Component<Props> {

  componentDidMount() {
    this.props.setPageName('PHOTOS');
  }

  render() {
    const {
      closePhotoDetail,
      openPhotoDetail,
      selectedAlbum,
      isModal,
      resetModal,
      selectedIndex
    } = this.props;
    return (
      <div>
        <Seo
          description="BUMP OF CHICKENオフィシャルサイト。ニュース、ディスコグラフィー、スタッフダイアリー、GOODS、PICSなど。"
          lang="ja"
          title="BUMP OF CHICKEN official website"
        />
        <Layout>
          <PhotoTemplate openDetail={openPhotoDetail} />
          <CSSTransition
            in={isModal}
            mountOnEnter
            unmountOnExit
            timeout={600}
            classNames="fade"
            onExited={() => resetModal()}
          >
            <PhotoDetail
              photoData={selectedAlbum}
              onClose={closePhotoDetail}
              index={selectedIndex}
            />
          </CSSTransition>
        </Layout>
      </div>
    );
  }
}

const mapStateToProps = () => createStructuredSelector({
  // modalUrl: makeSelectedPhotoId(),
  selectedIndex: makeSelectPhotoIndex(),
  selectedAlbum: makeSelectedAlbum(),
  isModal: makeIsModal()
});
const mapDispatchToProps = dispatch => bindActionCreators({
  openPhotoDetail,
  closePhotoDetail,
  resetModal,
  setPageName
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Photo);
