import {GET_PLAY_LIST, GET_TRACK_LIST, DATA_PROP_CHANGED} from './types';
// import validator from 'validator';
// import AsyncStorage from '@react-native-community/async-storage';
import {Backend} from '../services/Backend';
// import {savePlayerIdBackend} from './HomePageActions'
// import {errorMessage} from '../utils/global';
// import {NavigationActions, StackActions} from 'react-navigation';
// import {showMessage} from 'react-native-flash-message';
export const dataPropChanged = (prop, value) => {
  return {
    type: DATA_PROP_CHANGED,
    prop,
    value,
  };
};
export const getPlayList = (page) => {
  return async (dispatch, getState) => {
    await Backend.getPlayList(page).then(response => {
      if (response.message === 'Network Error') {
      } else {
        console.log('getWorkerStationgetWorkerStation', response);
        dispatch({
          type: GET_PLAY_LIST,
          data: response.data.playlists.items,
        });
      }
    });
  };
};

export const getTracks = id => {
  return async (dispatch, getState) => {
    await Backend.getTracks(id).then(response => {
      if (response.message === 'Network Error') {
      } else {
        console.log('getWorkerStationgetWorkerStation', response);
        dispatch({
          type: GET_TRACK_LIST,
          data: response.data.items,
        });
      }
    });
  };
};
