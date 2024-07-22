import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #00246B;
  color: white;
  padding: 20px;
  text-align: center;
`;

function Footer() {
  return (
    <FooterContainer>
      <p>&copy; 2024 Mental Health Tracker</p>
    </FooterContainer>
  );
}

export default Footer;

