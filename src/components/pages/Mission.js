import React from 'react';
import PropTypes from 'prop-types';
import JoinMission from './JoinMission';

const Mission = (props) => {
  const { mission } = props;
  console.log('props', mission);
  return (
    <tr>
      <th>
        <h5>{mission.mission_name}</h5>
      </th>
      <th>
        <p>{mission.mission_description}</p>
      </th>
      <th className="align-middle">switchBadge</th>
      <th className="align-middle">
        <JoinMission isJoined={mission.isJoined} id={mission.mission_id} />
      </th>
    </tr>
  );
};

Mission.propTypes = {
  mission: PropTypes.shape({
    mission_id: PropTypes.string,
    mission_name: PropTypes.string,
    mission_description: PropTypes.string,
    isJoined: PropTypes.bool,
  }).isRequired,
};

export default Mission;
