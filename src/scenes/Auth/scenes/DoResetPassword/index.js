import PropTypes from 'prop-types';
import React from 'react';

export default function DoResetPassword(props) {
  return (
    <p>You are at {props.match.url}</p>
  );
}

DoResetPassword.defaultProps = {

};

DoResetPassword.propTypes = {
  match: PropTypes.object.isRequired,
};
