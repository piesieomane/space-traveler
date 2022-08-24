import React from 'react';
import { useSelector } from 'react-redux';

const MissionProfile = () => {
  const missionProfile = useSelector((state) => state.missions);
  // filter out the missions that are reserved
  const reservedMissions = missionProfile.filter((mission) => mission.isJoined);
  const displayMissions = reservedMissions.map((mission) => (
    <tr key={mission.mission_id}>
      <td>
        <p className="profile-item">{mission.mission_name}</p>
      </td>
    </tr>
  ));

  return (
    <div>
      <table className="styled-table">
        <tbody>{displayMissions}</tbody>
      </table>
    </div>
  );
};

export default MissionProfile;
