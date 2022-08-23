import React from 'react';
import JoinMission from './JoinMission';

const Mission = (props) => {
  const { mission } = props;
  console.log('props', mission);
  return (
    <tr>
      <h5>missionname</h5>

      <p>missionmissiondescription</p>

      <div className="align-middle">switchBadge</div>
      <div className="align-middle">
        <JoinMission />
      </div>
    </tr>
  );
};

export default Mission;
