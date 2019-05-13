import React from 'react';
import styled from 'styled-components';

const Star = () => {
  const Svg = styled.svg`
    display: block;
  `;

  return (
    <Svg viewBox="0 0 6 6" width="6" height="6">
      <path d="M3 0l.741 2.244L6 2.292 4.2 3.728 4.854 6 3 4.643 1.146 6 1.8 3.728 0 2.292l2.259-.048z" />
    </Svg>
  );
};

export default Star;
