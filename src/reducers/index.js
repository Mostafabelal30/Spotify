import {combineReducers} from 'redux';
import playListReducer from './playListReducer';

export default combineReducers({
  playList: playListReducer,
});
