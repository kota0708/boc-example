import PhotoRepository from './photo-repository';
import VideosRepository from './videos-repository';

const repositories = {
  photo: PhotoRepository,
  videos: VideosRepository
};

/* eslint-disable import/prefer-default-export */
export const RepositoryFactory = {
  get: name => repositories[name]
};
