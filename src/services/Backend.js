import {I18nManager, Platform, Alert} from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import * as axios from 'axios';
import {BASE_URL} from '../config';
import {errorMessage, showCorrectPlateNumber} from '../utils/global';
import strings from '../strings';
axios.defaults.baseURL = BASE_URL;
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.get['Content-Type'] = 'application/json';
axios.defaults.headers.patch['Content-Type'] = 'application/json';
axios.defaults.headers.delete['Content-Type'] = 'application/json';
axios.defaults.headers.common['IsIOS'] =
  Platform.OS == 'ios' ? 'true' : 'false';

function handleRequestError(data) {
  NetInfo.fetch().then(state => {
    console.log('isConnectedisConnected', state.isConnected);

    setTimeout(() => {
      if (!state.isConnected) {
        errorMessage(strings.noInternetConnection);
      } else {
        if (!data) {
          errorMessage(strings.anErrorOccured);
        }
      }
    });
  });
}

export const Backend = {
  token:
    'BQBxvPDCF6yUZcd9NFVB_0-aOJGgDqg9-54DCrv4vBXqDDBvjG_x4QsMpnmvDGr_--5sRv4ommRXZ5S-FByrFe1mihkaOv8hRZXAD02WR5BD8cFvxmAZfFSxpqb8WWbdIiuMnWcQc6Wb4k9kxTl4az3cA3iC0v0dp6MLYjDCVYOXlsXKs7seTNL9FXg',
  lang: I18nManager.isRTL ? 'ar' : 'en',

  getPlayList(page) {
    const offset = page * 20;
    console.log(`browse/featured-playlists?limit=20&offset=${offset}`);
    return axios
      .get(`browse/featured-playlists?limit=20&offset=${offset}`, {
        headers: {
          Authorization: `Bearer ${this.token}`,
        },
      })
      .then(function(response) {
        console.log('responseresponseresponseresponseresponse', response);
        return response;
      })
      .catch(function(err) {
        console.log('errerrerrerrerr', err);

        const response = err.response ? err.response.data : undefined;

        // console.log('errerrerrerrerrerr', err.message);
        // if (err.message === 'Network Error') {
        // }
        handleRequestError(response);
        return err;
      });
  },
  getTracks(id) {
    return axios
      .get(`playlists/${id}/tracks`, {
        headers: {
          Authorization: `Bearer ${this.token}`,
        },
      })
      .then(function(response) {
        console.log('responseresponseresponseresponseresponse', response);
        return response;
      })
      .catch(function(err) {
        console.log('errerrerrerrerrerr', err.response);
        const response = err.response ? err.response.data : undefined;
        // console.log('errerrerrerrerrerr', err);
        handleRequestError(response);
        return err;
      });
  },
};
