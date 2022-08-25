import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Mission from './Mission';
import { getMissions } from '../../redux/missions/missions';
import './mission.css';

const Missions = () => {
  const missionsItems = useSelector((state) => state.missions);

  const dispatch = useDispatch();
  useEffect(() => {
    if (missionsItems.length === 0) {
      dispatch(getMissions());
    }
  }, []);

  return (
    <div className="mission_table">
      {' '}
      <table className="styled-table">
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th>Join</th>
          </tr>
        </thead>
        <tbody>
          {missionsItems.map((mission) => (
            <Mission key={mission.mission_id} mission={mission} />
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Missions;
