import { createSelector } from 'reselect';

import photoListData from '../../constants/stub/photo-list-data';

const selectPhoto = state => state.photo;

const getAlbumData = id => {
  const { data } = photoListData;
  const albumData = data.filter(d => d.id === id);
  return albumData.length > 0 ? albumData[0] : null;
};

const makeIsModal = () => createSelector(selectPhoto, state => state.isModal);

/**
 * アルバム情報返す
 * @returns {object}
 */
const makeSelectedAlbum = () => createSelector(
  selectPhoto,
  state => {
    const { albumId } = state;
    return getAlbumData(albumId);
  }
);

/**
 * 選択された画像のindex値を返す
 * @returns {number}
 */
const makeSelectPhotoIndex = () => createSelector(
  selectPhoto,
  state => {
    const { selectedPhotoId, albumId } = state;
    if (albumId.length === 0) {
      return -1;
    }
    const albumData = getAlbumData(albumId);
    const { photos } = albumData;
    return photos.findIndex(p => p.id === selectedPhotoId);
  }
);

/* eslint-disable import/prefer-default-export */
export {
  makeSelectPhotoIndex,
  makeSelectedAlbum,
  makeIsModal
};
