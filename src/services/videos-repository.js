import Repository from './repository';

const resource = '/data/videos/';
export default {
  get() {
    return Repository.get(`${resource}data.json`);
  }
};
