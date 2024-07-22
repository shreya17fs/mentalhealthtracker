import React from 'react';
import styled from 'styled-components';

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Home = () => (
  <HomeWrapper>
    <h1>Welcome to the Mental Health Tracker</h1>
    <p>Track your mood and journal your thoughts.</p>
  </HomeWrapper>
);

export default Home;

