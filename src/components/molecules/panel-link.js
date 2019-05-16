// @flow
import React from 'react';
import styled from 'styled-components';
// import Color from '../../constants/styles/color';

type Props = {
  text?: string, // リンクのtextを受け取る
  link?: string // リンクを受け取る
};

const Wrap = styled.div`
  font-size: 14px;
  font-size: 1.4rem;
  line-height: 1.71;
  letter-spacing: 0.0004em;
  margin-bottom: 30px;

  :last-child {
    margin-bottom: 0;
  }
`;

const PanelLink = (props: Props) => {
  const {
    text,
    link
  } = props;

  console.log(text);
  console.log(link);

  return (
    <Wrap>
      <p>panel</p>
    </Wrap>
  );
};

PanelLink.defaultProps = {
  text: 'TOWER RECORDS',
  link: '/'
};

export default PanelLink;
