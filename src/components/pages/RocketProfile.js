import React from 'react';
import { useSelector } from 'react-redux';

const RocketProfile = () => {
  const rocketProfile = useSelector((state) => state.rockets);
  // filter out the rockets that are reserved
  const reservedRockets = rocketProfile.filter((rocket) => rocket.isReserved);
  const displayRockets = reservedRockets.map((rocket) => (
    <tr key={rocket.id}>
      <td>
        <p className="profile-item">{rocket.rocket_name}</p>
      </td>
    </tr>
  ));

  return (
    <div>
      <table className="styled-table">
        <tbody>{displayRockets}</tbody>
      </table>
    </div>
  );
};

export default RocketProfile;
