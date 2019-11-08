import React from 'react';

interface Props {
  children: string;
  onClick: () => void;
}

function Button({ children, onClick }: Props): JSX.Element {
  return (
    <button type="button" onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
