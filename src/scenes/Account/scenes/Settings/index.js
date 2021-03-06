import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import Button from '../../../../components/Button';

const Title = styled.h1`
  font-size: 2em;
`;

const h3 = styled.h3`
  font-size: 1em;
`;

const Container = styled.div`
  display: flex;
`;

const Column2 = styled.div`
  width: 70%;
`;

const Input = styled.input`
  font-size: 1.25em;
  padding: 0.5em;
  border: none;
  border-radius: 3px;

  &:hover {
    box-shadow: inset 1px 1px 2px rgba(0,0,0,0.1);
  }
`;

const A = styled.a`
  text-decoration:none;
  color: #f2994a;
`;

const ButtonImg = styled(Button)`
  background-color: #f2994a;
  color: white;
  border: none;
  font-family: inherit;
  font-size: 1.6rem;
  height: 3.6rem;
  font-weight: 700;
  letter-spacing: normal;
  padding: .5em 1.25em;
  text-align: center;
`;

export default function Profile() {
  return (
    <Container>
      <Column2>
        <Title>Settings</Title>
        <Title>Change Password</Title>
        <h3>Old Password</h3>
        <Input />
        <h3>New Password</h3>
        <Input />
        <h3>Confirm New Password</h3>
        <Input />
        <h5><A href="#">Forgot Password?</A></h5>
        <h5><ButtonImg>Update Password</ButtonImg></h5>
        <Title>Change Username</Title>
        <p>Changing username could have unintended side effects</p>
        <h3>New username</h3>
        <Input />
        <h3>Confirm New Username</h3>
        <Input />
        <h5><ButtonImg>Change Username</ButtonImg></h5>
        <Title>API Key</Title>
        <h4>Your API Key<A href="#">Reveal</A></h4>
        <h5><ButtonImg>Reset API Key</ButtonImg></h5>
        <Title>Delete Account</Title>
        <h5><ButtonImg>Delete Account</ButtonImg></h5>
      </Column2>
    </Container>
  );
}

Profile.defaultProps = {

};

Profile.propTypes = {
  match: PropTypes.object.isRequired,
};
