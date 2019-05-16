// @flow
import React from 'react';
import styled from 'styled-components';
import Color from '../../constants/styles/color';

import ArrowLink from '../atoms/icons/arrow-link';

type Props = {
  text?: string, // リンクのtextを受け取る
  link?: string // リンクを受け取る
};

const Wrap = styled.div`
  background-color: ${Color.BLACK};
`;

const StyleLink = styled.a`
  display: block;
  padding: 9px 20px;
  text-decoration: none;
`;

const StyleLinkInner = styled.div`
  position: relative;
`;

const Text = styled.p`
  font-size: 14px;
  font-size: 1.4rem;
  line-height: 1.71;
  letter-spacing: 0.0004em;
  color: ${Color.WHITE};
  padding-right: 25px;
`;

const IconWrap = styled.div`
  width: 20px;
  height: 20px;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  margin: auto 0;
`;

const PanelLink = (props: Props) => {
  const {
    text,
    link
  } = props;

  return (
    <Wrap>
      <StyleLink href={link}>
        <StyleLinkInner>
          <Text>{text}</Text>
          <IconWrap>
            <ArrowLink color="white" />
          </IconWrap>
        </StyleLinkInner>
      </StyleLink>
    </Wrap>
  );
};

PanelLink.defaultProps = {
  text: 'TOWER RECORDS',
  link: '/'
};

export default PanelLink;
