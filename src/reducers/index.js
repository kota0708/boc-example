import { combineReducers } from 'redux';

import global from './global';
import photo from './photo';
import videos from './videos';

export default combineReducers({ global, photo, videos });
