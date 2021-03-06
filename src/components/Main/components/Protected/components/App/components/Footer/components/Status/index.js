import React, { Component } from 'react';
import axios from 'axios';
import styled, { css } from 'styled-components';

const CHECK_INTERVAL = 5 * 60 * 1000;
const STATUSPAGE_URL = 'https://5jbj2wr0jv52.statuspage.io/api/v2/summary.json';
const stateReducer = ({ indicator, description }) => () => ({ indicator, description });
const StatusIndicator = styled.span`
  display: inline-block;
  width: 8px;
  height: 8px;
  margin-right: 4px;
  border-radius: 99px;
  background-color: #7ae43b;
  ${props => props.status === 'minor' && css`background-color: #ffbc01;`}
  ${props => props.status === 'major' && css`background-color: #f2994a;`}
  ${props => props.status === 'critical' && css`background-color: #ff3f80;`}
`;

export default class Status extends Component {
  state = {
    indicator: 'none',
    description: 'All Systems Operational',
  }

  componentDidMount = () => {
    this.checkServer();
    this.timer = window.setInterval(this.checkServer, CHECK_INTERVAL);
  }

  componentWillUnmount = () => {
    window.clearInterval(this.timer);
  }

  checkServer = async () => {
    try {
      const response = await axios.get(STATUSPAGE_URL);
      if (response.data && response.data.status) {
        this.setState(stateReducer(response.data.status));
      }
    } catch (err) {
      console.error('An error occured fetching the status:', err); // eslint-disable-line no-console
    }
  }

  render() {
    const { indicator, description } = this.state;
    return (
      <span><StatusIndicator status={indicator} />{description}</span>
    );
  }
}
