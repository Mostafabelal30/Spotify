import {GET_PLAY_LIST, GET_TRACK_LIST, DATA_PROP_CHANGED} from './types';
import {Backend} from '../services/Backend';
export const dataPropChanged = (prop, value) => {
  return {
    type: DATA_PROP_CHANGED,
    prop,
    value,
  };
};

export const getPlayList = page => {
  return async (dispatch, getState) => {
    await Backend.getPlayList(page).then(response => {
      console.log('getWorkerStationgetWorkerStation', response);
      dispatch({
        type: GET_PLAY_LIST,
        data: response.data.playlists.items,
      });
    });
  };
};

export const getTracks = id => {
  return async (dispatch, getState) => {
    await Backend.getTracks(id).then(response => {
      console.log('getWorkerStationgetWorkerStation', response.data);
      dispatch({
        type: GET_TRACK_LIST,
        data: response.data.items,
      });
    });
  };
};
