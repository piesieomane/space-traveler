import { createAsyncThunk } from '@reduxjs/toolkit';

const GET_ROCKETS = 'MISSIONS/GET_ROCKETS';
const RESERVE_ROCKET = 'MISSIONS/RESERVE_ROCKETS';
const CANCEL_RESERVE = 'MISSIONS/CANCEL_RESERVE';

const initialState = [];

export const getRockets = createAsyncThunk(GET_ROCKETS, async () => {
  const fetchAPI = await fetch('https://api.spacexdata.com/v3/rockets');
  const data = await fetchAPI.json();
  const rockets = data.map((rocket) => ({
    id: rocket.id,
    rocket_name: rocket.rocket_name,
    description: rocket.description,
    flickr_images: rocket.flickr_images[0],
    isReserved: false,
  }));
  return {
    rockets,
  };
});

export const reserveRocket = (id) => ({
  type: RESERVE_ROCKET,
  id,
});

export const cancelReserve = (id) => ({
  type: CANCEL_RESERVE,
  id,
});

const changeStatus = (state, id, status) => {
  const newState = state.map((rocket) => {
    if (rocket.id !== id) {
      return rocket;
    }
    return {
      id: rocket.id,
      rocket_name: rocket.rocket_name,
      description: rocket.description,
      flickr_images: rocket.flickr_images,
      isReserved: status,
    };
  });
  return newState;
};

const rocketReducer = (state = initialState, action) => {
  switch (action.type) {
    case `${GET_ROCKETS}/fulfilled`:
      return action.payload.rockets;
    case RESERVE_ROCKET:
      return changeStatus(state, action.id, true);
    case CANCEL_RESERVE:
      return changeStatus(state, action.id, false);
    default:
      return state;
  }
};

export default rocketReducer;
