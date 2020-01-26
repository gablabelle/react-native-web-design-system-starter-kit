import React, { ReactNode } from 'react';

interface Props {
  onClick?: () => void;
  children: ReactNode;
}

function Button({ onClick, children }: Props) {
  return (
    <button type="button" onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
