import PhotoRepository from './photo-repository';

const repositories = {
  photo: PhotoRepository
};

/* eslint-disable import/prefer-default-export */
export const RepositoryFactory = {
  get: name => repositories[name]
};
