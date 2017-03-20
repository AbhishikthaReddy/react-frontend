import React, { PropTypes } from 'react';

export default function Logout(props) {
  return (
    <p>You are at {props.match.url}</p>
  );
}

Logout.defaultProps = {

};

Logout.propTypes = {
  match: PropTypes.object.isRequired,
};
