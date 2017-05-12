import PropTypes from 'prop-types';
import React from 'react';

export default function Email(props) {
  return (
    <p>You are at {props.match.url}</p>
  );
}

Email.defaultProps = {

};

Email.propTypes = {
  match: PropTypes.object.isRequired,
};
