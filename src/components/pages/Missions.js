import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import Mission from './Mission';
import { getMissions } from '../../redux/missions/missions';
import './mission.css';

const Missions = () => {
  const missionsItems = useSelector((state) => state.missions);
  //console.log(missionsItems);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMissions());
  }, []);

  return (
    <div className="mission_table">
      {' '}
      <table>
        <thead>
          <th>Mission</th>
          <th>Description</th>
          <th>Status</th>
          <th>Join</th>
        </thead>
        <tbody>
          <Mission />
        </tbody>
      </table>
    </div>
  );
};
export default Missions;
