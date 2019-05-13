import React, { Fragment } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { SIZE_MD } from '../../constants/styles/size';
import Color from '../../constants/styles/color';

import DinCondensed from '../atoms/text/din-condensed';
import ArrowLink from '../atoms/icons/arrow-link';

const Heading = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 25px;
`;

const ArrowWrap = styled.div`
  width: 20px;
  height: 20px;
`;

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  color: ${Color.BLACK};
  text-decoration: none;
`;

const MoreText = styled.p`
  font-size: 14px;
  font-size: 1.4rem;
  line-height: 1.71;
  letter-spacing: 0.0004em;
  margin-right: 10px;
`;

const NewsHeading = () => (
  <Fragment>
    <Heading>
      <DinCondensed size={SIZE_MD} text="NEWS" />
      <div>
        <StyledLink to="/news">
          <MoreText>
            MORE
          </MoreText>
          <ArrowWrap>
            <ArrowLink />
          </ArrowWrap>
        </StyledLink>
      </div>
    </Heading>
  </Fragment>
);

export default NewsHeading;
