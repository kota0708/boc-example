import Repository from './repository';

const resource = '/data/photo/';
export default {
  get(id) {
    return Repository.get(`${resource}${id}.json`);
  }
};
