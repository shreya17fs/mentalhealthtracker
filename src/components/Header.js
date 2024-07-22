import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #00246B;
  color: white;
  padding: 20px;
  text-align: center;
`;

function Header() {
  return (
    <HeaderContainer>
      <h1>Mental Health Tracker</h1>
    </HeaderContainer>
  );
}

export default Header;


