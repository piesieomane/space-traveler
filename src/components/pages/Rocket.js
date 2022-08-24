import React from 'react';
import { PropTypes } from 'prop-types';

const Rocket = (props) => {
  const { rocket } = props;
  return (
    <div className="rocket">
      <div className="img-rocket">
        <img src={rocket.flickr_images} alt="rocket_img" id={rocket.id} />
      </div>
      <h2>{rocket.rocket_name}</h2>
      <div>
        <p>{rocket.description}</p>
      </div>
      <button type="submit">Reserve Rocket</button>
    </div>
  );
};

Rocket.propTypes = {
  rocket: PropTypes.shape({
    id: PropTypes.number,
    rocket_name: PropTypes.string,
    description: PropTypes.string,
    flickr_images: PropTypes.string,
  }).isRequired,
};

export default Rocket;
