import React from 'react';
import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { joinMission, leaveMission } from '../../redux/missions/missions';
import './joinmission.css';

const JoinMission = (props) => {
  const { isJoined, id } = props;
  const dispatch = useDispatch();

  const clickButton = () => {
    if (!isJoined) {
      dispatch(joinMission(id));
    } else {
      dispatch(leaveMission(id));
    }
  };

  const isJoinedStatus = () => (isJoined ? 'Leave ' : 'Join ');

  return (
    <div>
      <button
        type="button"
        className={`btn-mission-${isJoinedStatus()}`}
        onClick={clickButton}
      >
        {isJoinedStatus()}
        Mission
      </button>
    </div>
  );
};

JoinMission.propTypes = {
  isJoined: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
};

export default JoinMission;
