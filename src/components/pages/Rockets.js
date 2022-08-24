import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRockets } from '../../redux/rockets/rockets';
import Rocket from './Rocket';

const Rockets = () => {
  const rockets = useSelector((state) => state.rockets);
  // console.log('RKS', rockets);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRockets());
  }, []);
  return (
    <ul>
      {rockets.map((rocket) => (
        <Rocket key={rocket.id} rocket={rocket} />
      ))}
    </ul>
  );
};
export default Rockets;
