export const actions = {
  deleteFavorite: 'DELETE_FAVORITE',
  setFavorite: 'SET_FAVORITE',
  loginRequest: 'LOGIN_REQUEST',
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
