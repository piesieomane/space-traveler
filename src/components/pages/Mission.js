import React from 'react';
import PropTypes from 'prop-types';
import JoinMission from './JoinMission';

const Mission = (props) => {
  const { mission } = props;

  const isActiveStatus = () => (mission.isJoined ? 'active ' : 'inactive ');
  const switchBadge = () => {
    if (mission.isJoined) {
      return (
        <div className={`btn-mission-${isActiveStatus()}`}>Active Member</div>
      );
    }
    return (
      <div className={`btn-mission-${isActiveStatus()}`}>NOT A MEMBER</div>
    );
  };
  return (
    <tr>
      <td>
        <h5>{mission.mission_name}</h5>
      </td>
      <td>
        <p>{mission.mission_description}</p>
      </td>
      <td>{switchBadge()}</td>
      <td>
        <JoinMission isJoined={mission.isJoined} id={mission.mission_id} />
      </td>
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
