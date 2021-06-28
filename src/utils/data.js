import data from '../db/data.json';

export const loadState = () => {

  const { initialState } = data;
  initialState.user = {};
  initialState.playing = {};

  try {
    const localState = sessionStorage.getItem('state');

    if (localState === null) {
      return initialState;
    }

    return JSON.parse(localState);

  } catch (error) {
    console.log('error');
    return initialState;
  }
};

export const saveState = (state) => {
  try {
    const newState = JSON.stringify(state);
    sessionStorage.setItem('state', newState);
  } catch (error) {
  }
};
