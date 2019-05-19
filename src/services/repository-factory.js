import PhotoRepository from './photo-repository';
import VideosRepository from './videos-repository';
import NewsRepository from './news-repository';
import HistoryRepository from './hisoty-repository';

const repositories = {
  photo: PhotoRepository,
  videos: VideosRepository,
  news: NewsRepository,
  history: HistoryRepository
};

/* eslint-disable import/prefer-default-export */
export const RepositoryFactory = {
  get: name => repositories[name]
};
