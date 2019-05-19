import Repository from './repository';

const resource = '/data/news/';
export default {
  get(id) {
    return Repository.get(`${resource}${id}.json`);
  },
  getTop() {
    return Repository.get(`${resource}news.json`);
  }
};
