// @flow
import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

// import Color from '../../../constants/styles/color';
import { SIZE_SM } from '../../../constants/styles/size';
import pickUpData from '../../../constants/stub/news/pick-up';

import DinCondensed from '../../atoms/text/din-condensed';

type Props = {
  data?: Array<string>, // pickupのデータを受け取る
};

const Wrap = styled.div`
  padding: 35px 25px;
  background-color: ${props => props.theme.colors.navy};
`;

const TitleWrap = styled.h2`
  margin-bottom: 32px;
  font-weight: 500;
  color: ${props => props.theme.colors.white};
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  display: block;
  color: ${props => props.theme.colors.white};
  font-size: 1.4rem;
  font-size: 14px;
  line-height: 1.71;
  letter-spacing: 0.0004em;
`;

const List = styled.ul`
  padding: 0;
`;

const Lists = styled.li`
  margin-bottom: 20px;

  :last-child {
    margin-bottom: 0;
  }
`;

const PickUp = (props: Props) => {
  const { data } = props;

  const pickUpList = data.map((r, i) => (
    <Lists key={i}>
      <StyledLink to={r.link}>
        {r.title}
      </StyledLink>
    </Lists>
  ));

  return (
    <Wrap>
      <TitleWrap>
        <DinCondensed size={SIZE_SM} text="PICK UP!" />
      </TitleWrap>
      <List>
        {pickUpList}
      </List>
    </Wrap>
  );
};

PickUp.defaultProps = {
  data: pickUpData.data
};

export default PickUp;
