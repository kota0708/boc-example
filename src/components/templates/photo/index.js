import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import photoData from '../../../constants/stub/photo-list-data';


const Container = styled.div`
  position: relative;
`;

const StyledLink = styled(Link)`
  color: #000; // 仮
  font-size: 2rem;
`;

const PhotoTop = () => {

  const { data } = photoData;

  const links = data.map(
    d => (
      <StyledLink
        key={d.id}
        state={{ id: d.id }}
        to={`/photos/list/?id=${d.id}`}
      >
        {d.id}
      </StyledLink>
    )
  );

  return (
    <Container>
      {links}
    </Container>
  );
};
export default PhotoTop;
