import React from 'react';
import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { joinMission, leaveMission } from '../../redux/missions/missions';

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
  return (
    <div>
      <button type="button" onClick={clickButton}>
        {isJoined ? 'Leave Mission' : 'Join Mission'}
      </button>
    </div>
  );
};

JoinMission.propTypes = {
  isJoined: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
};

export default JoinMission;
