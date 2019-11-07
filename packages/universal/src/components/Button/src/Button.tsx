import React from 'react';
import styled from 'styled-components/native';

const StyledText = styled.Text`
  color: red;
`;

function Button(): JSX.Element {
  return (
    <button type="button">
      <StyledText>Click me</StyledText>
    </button>
  );
}

export default Button;
