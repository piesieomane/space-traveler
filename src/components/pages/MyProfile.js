import MissionProfile from './MissionProfile';
import RocketProfile from './RocketProfile';

const MyProfile = () => (
  <div className="profile-flex">
    <RocketProfile />
    {' '}
    <MissionProfile />
  </div>
);
export default MyProfile;
