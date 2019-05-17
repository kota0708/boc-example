// @flow
import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'gatsby';

import { SIZE_SM } from '../../../constants/styles/size';
import DinCondensed from '../../atoms/text/din-condensed';
// import Color from '../../../constants/styles/color';
// import member from '../../../constants/member';

type Props = {
  oldYear?: number, // 古い年を受け取る
  newYear?: number // 新しい年を受け取る
};

const Wrap = styled.div`
  width: 100%;
  padding: 0 25px;
`;

const Inner = styled.div`
  width: 100%;
  position: relative;
  z-index: 1;

  &::before {
    content: '';
    width: 100%;
    max-width: 300px;
    height: 1px;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    background-color: ${props => props.theme.colors.black};
    transform: rotate(-36deg);
    transform-origin: center center;
    z-index: -1;
  }
`;

const width = css`
  width: 100%;
  max-width: 325px;
`;

const OldYear = styled.p`
  ${width}
  display: flex;
  justify-content: flex-end;
  background-color: #bcc5cc;
  margin: 0 auto 40px;
`;

const HistoryLinkWrap = styled.div`
  display: block;
  margin-bottom: 40px;
`;

const HistoryLink = styled(Link)`
  display: block;
  text-decoration: none;
  text-align: center;
  background-color: ${props => props.theme.colors.black};
  color: ${props => props.theme.colors.white};
  padding: 20px 0 15px;
`;

const NewYear = styled.p`
  ${width}
  margin: 0 auto;
  padding-top: 5px;
  background-color: #bcc5cc;
`;

const History = (props: Props) => {
  const { oldYear, newYear } = props;

  return (
    <Wrap>
      <Inner>
        <OldYear>
          <DinCondensed size={SIZE_SM} text={oldYear} />
        </OldYear>
        <HistoryLinkWrap>
          <HistoryLink to="/">
            <DinCondensed size={SIZE_SM} text="HISTORY of" />
            <br />
            <DinCondensed size={SIZE_SM} text="“BUMP OF CHICKEN”" />
          </HistoryLink>
        </HistoryLinkWrap>
        <NewYear>
          <DinCondensed size={SIZE_SM} text={newYear} />
        </NewYear>
      </Inner>
    </Wrap>
  );
};

History.defaultProps = {
  oldYear: 1997,
  newYear: 2019
};

export default History;
