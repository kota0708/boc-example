/* @flow */
import React from 'react';
import styled from 'styled-components';

import nl2br from '../../../util/nl2br';

type Props = {
  title: string, // アルバムのタイトル
  amount: Number // 写真の数を受け取る
};


const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

const HeadingTitleWrap = styled.h2`
  font-size: 24px;
  font-size: 2.4rem;
  font-weight: normal;
  line-height: 1.33;
  letter-spacing: 0.0002em;
`;

const HeadingText = styled.span`
  display: block;
  margin-bottom: 10px;

  :last-child {
    margin-bottom: 0;
  }
`;

const HeadingAmount = styled.p`
  font-size: 14px;
  font-size: 1.4rem;
  line-height: 1.71;
  color: ${props => props.theme.colors.gray};
  letter-spacing: 0.0004em;
  align-self: flex-end;
`;


const Heading = (props: Props) => {

  const {
    title,
    amount
  } = props;

  return (
    <Wrap>
      <HeadingTitleWrap>
        <HeadingText>
          {nl2br(title)}
        </HeadingText>
      </HeadingTitleWrap>
      <HeadingAmount>
        {amount}
        &nbsp;photos
      </HeadingAmount>
    </Wrap>
  );
};
export default Heading;
