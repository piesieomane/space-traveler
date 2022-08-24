import React from 'react';
import { useSelector } from 'react-redux';

const RocketProfile = () => {
  const rocketProfile = useSelector((state) => state.rockets);
  // filter out the rockets that are reserved
  const reservedRockets = rocketProfile.filter((rocket) => rocket.isReserved);
  const displayRockets = reservedRockets.map((rocket) => (
    <tr key={rocket.id}>
      <h2>{rocket.rocket_name}</h2>
    </tr>
  ));

  return (
    <div>
      <h1>MY ROCKETS</h1>
      <table>
        <tbody>{displayRockets}</tbody>
      </table>
    </div>
  );
};

export default RocketProfile;
