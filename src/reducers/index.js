import { combineReducers } from 'redux';

import global from './global';
import photo from './photo';
import videos from './videos';
import news from './news';
import history from './history';

export default combineReducers({
  global,
  photo,
  videos,
  news,
  history
});
