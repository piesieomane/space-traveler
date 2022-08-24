import { createAsyncThunk } from '@reduxjs/toolkit';

const GET_ROCKETS = 'MISSIONS/GET_ROCKETS';

const initialState = [];

export const getRockets = createAsyncThunk(GET_ROCKETS, async () => {
  const fetchAPI = await fetch('https://api.spacexdata.com/v3/rockets');
  const data = await fetchAPI.json();
  const rockets = data.map((rocket) => ({
    id: rocket.id,
    rocket_name: rocket.rocket_name,
    description: rocket.description,
    flickr_images: rocket.flickr_images[0],
  }));
  return {
    rockets,
  };
});

const rocketReducer = (state = initialState, action) => {
  switch (action.type) {
    case `${GET_ROCKETS}/fulfilled`:
      return action.payload.rockets;
    default:
      return state;
  }
};

export default rocketReducer;
