import React from 'react';
import PropTypes from 'prop-types';

const ImageView = ({ src, alt, ...rest }) => (
  <img src={src} alt={alt} {...rest} />
);

ImageView.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
};

ImageView.defaultProps = {
  alt: '',
};

export default ImageView;
