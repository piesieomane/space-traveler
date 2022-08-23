import { createAsyncThunk } from '@reduxjs/toolkit';

const GET_MISSIONS = 'MISSIONS/GET_MISSIONS';

const initialState = [];

export const getMissions = createAsyncThunk(GET_MISSIONS, async () => {
  const fetchAPI = await fetch('https://api.spacexdata.com/v3/missions');
  const data = await fetchAPI.json();
  const missions = data.map((mission) => ({
    mission_id: mission.mission_id,
    mission_name: mission.mission_name,
    mission_description: mission.description,
    isJoined: false,
  }));
  return {
    missions,
  };
});

const missionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case `${GET_MISSIONS}/fulfilled`:
      return [...state, ...action.payload.missions];
    default:
      return state;
  }
};

export default missionsReducer;
