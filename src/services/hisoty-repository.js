import Repository from './repository';

const resource = '/data/history/';
export default {
  get() {
    return Repository.get(`${resource}data.json`);
  }
};
