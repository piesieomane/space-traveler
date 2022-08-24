import { createAsyncThunk } from '@reduxjs/toolkit';

const GET_MISSIONS = 'MISSIONS/GET_MISSIONS';
const JOIN_MISSIONS = 'MISSIONS/GET_MISSIONS';
const LEAVE_MISSIONS = 'MISSIONS/LEAVE_MISSIONS';

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

export const joinMission = (id) => ({
  type: JOIN_MISSIONS,
  id,
});

export const leaveMission = (id) => ({
  type: LEAVE_MISSIONS,
  id,
});

const missionStatus = (state, id, status) => {
  const newState = state.map((mission) => {
    if (mission.mission_id !== id) {
      return mission;
    }
    return {
      mission_id: mission.mission_id,
      mission_name: mission.mission_name,
      mission_description: mission.mission_description,
      isJoined: status,
    };
  });
  return newState;
};

const missionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case `${GET_MISSIONS}/fulfilled`:
      return action.payload.missions;
    case `${JOIN_MISSIONS}`:
      return missionStatus(state, action.id, true);
    case `${LEAVE_MISSIONS}`:
      return missionStatus(state, action.id, false);
    default:
      return state;
  }
};

export default missionsReducer;
