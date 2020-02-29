import * as ActionTypes from '../action/types';

const INIT_STATE = {
  featuredPlayList: [],
  trackList: [],
  featuredPlayListPage: 0,
  trackRefreshing: false,
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case ActionTypes.DATA_PROP_CHANGED:
      return {...state, [action.prop]: action.value};
    case ActionTypes.GET_PLAY_LIST:
      console.log('action.dataaction.data', action.data);
      return {
        ...state,
        featuredPlayList: [...state.featuredPlayList, ...action.data],
        featuredPlayListPage: state.featuredPlayListPage + 1,
      };
    case ActionTypes.GET_TRACK_LIST:
      console.log('action.dataaction.data', action.data);
      const tracks = [...new Set(action.data)].sort((a, b) =>
        a.track.name.localeCompare(b.track.name),
      );
      // [...new Set(action.data)]
      console.log('[...new Set(action.data)] ', tracks);
      return {...state, trackList: tracks};
    default:
      return state;
  }
};
