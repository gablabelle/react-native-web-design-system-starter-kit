import React from 'react';
import styled from 'styled-components/native';

const StyledText = styled.Text`
  background-color: green;
  color: red;
  position: absolute;
  z-index: 1;
`;

function Welcome() {
  return <StyledText>Welcome</StyledText>;
}

export default Welcome;
