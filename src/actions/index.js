export const actions = {
  deleteFavorite: 'DELETE_FAVORITE',
  setFavorite: 'SET_FAVORITE',
  loginRequest: 'LOGIN_REQUEST',
  logoutRequest: 'LOGOUT_REQUEST',
  registerRequest: 'REGISTER_REQUEST',
  getVideoSource: 'GET_VIDEO_SOURCE',
  setHoverAvaliable: 'SET_HOVER_AVALIABLE',
};

export const setFavorite = (payload) => {
  return {
    type: actions.setFavorite,
    payload,
  };
};

export const deleteFavorite = (payload) => {
  return {
    type: actions.deleteFavorite,
    payload,
  };
};

export const loginRequest = (payload) => {
  return {
    type: actions.loginRequest,
    payload,
  };
};

export const logoutRequest = () => {
  return {
    type: actions.logoutRequest,
    payload: {},
  };
};

export const registerRequest = (payload) => {
  return {
    type: actions.registerRequest,
    payload,
  };
};

export const getVideoSource = (payload) => {
  return {
    type: actions.getVideoSource,
    payload,
  };
};

export const setHoverAvaliable = (payload) => {
  return {
    type: actions.setHoverAvaliable,
    payload,
  };
};
