import React from 'react';
import { useDispatch } from 'react-redux';
import { PropTypes } from 'prop-types';
import { cancelReserve, reserveRocket } from '../../redux/rockets/rockets';

const Rocket = (props) => {
  const { rocket } = props;
  const dispatch = useDispatch();

  const handleClick = () => {
    if (!rocket.isReserved) {
      dispatch(reserveRocket(rocket.id));
    } else {
      dispatch(cancelReserve(rocket.id));
    }
  };

  return (
    <div className="rocket">
      <div className="img-rocket">
        <img src={rocket.flickr_images} alt="rocket_img" id={rocket.id} />
      </div>
      <div>
        <h2>{rocket.rocket_name}</h2>
        <div>
          <p>
            {' '}
            {rocket.isReserved ? <button type="button">Reserved</button> : ''}
            {rocket.description}
          </p>
        </div>
        <button type="button" onClick={handleClick}>
          {rocket.isReserved ? 'Cancel ' : 'Reserve '}
          Rocket
        </button>
      </div>
    </div>
  );
};

Rocket.propTypes = {
  rocket: PropTypes.shape({
    id: PropTypes.number,
    rocket_name: PropTypes.string,
    description: PropTypes.string,
    flickr_images: PropTypes.string,
    isReserved: PropTypes.bool,
  }).isRequired,
};

export default Rocket;
