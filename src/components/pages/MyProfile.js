import MissionProfile from './MissionProfile';
import RocketProfile from './RocketProfile';

const MyProfile = () => (
  <div className="profile-flex">
    <div>
      <h1>My Rockets</h1>
      <RocketProfile />
    </div>
    <div>
      <h1>My Missions</h1>
      <MissionProfile />
    </div>
  </div>
);
export default MyProfile;
