import React from 'react';
import JoinMission from './JoinMission';

const Mission = () => {
  return (
    <div>
      {' '}
      <tr>
        <th>
          <h5>missionname</h5>
        </th>
        <th>
          <p>missionmissiondescription</p>
        </th>
        <th className="align-middle">switchBadge</th>
        <th className="align-middle">
          <JoinMission />
        </th>
      </tr>
    </div>
  );
};

export default Mission;
