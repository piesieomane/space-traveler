import React from 'react';
import { useSelector } from 'react-redux';

const MissionProfile = () => {
  const missionProfile = useSelector((state) => state.missions);
  // filter out the missions that are reserved
  const reservedMissions = missionProfile.filter((mission) => mission.isJoined);
  const displayMissions = reservedMissions.map((mission) => (
    <tr key={mission.mission_id}>
      <h2>{mission.mission_name}</h2>
    </tr>
  ));

  return (
    <div>
      <h1>My Missions</h1>
      <table>
        <tbody>{displayMissions}</tbody>
      </table>
    </div>
  );
};

export default MissionProfile;
