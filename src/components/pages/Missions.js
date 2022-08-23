import Mission from './Mission';
import './mission.css';

const Missions = () => (
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
export default Missions;
