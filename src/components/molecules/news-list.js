// @flow
import React from 'react';
import styled from 'styled-components';

import { SIZE_XSM } from '../../constants/styles/size';
import DinCondensed from '../atoms/text/din-condensed';

type Props = {
  date: string, // 日付を受け取る
  category: string, // カテゴリーを受け取る
  description: string, // 詳細を受け取る
  categoryColor: string, // カテゴリーの色を受け取る
  descriptionSize: string // 詳細のフォントサイズを受け取る
};

const Content = styled.div`
  font-size: 14px;
  font-size: 1.4rem;
  line-height: 1.71;
  letter-spacing: 0.0004em;
  margin-bottom: 30px;

  :last-child {
    margin-bottom: 0;
  }
`;

const HeadingWrap = styled.div`
  width: 100%;
  margin-bottom: 9px;
  position: relative;
`;

const HeadingInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${props => props.theme.colors.gray};
`;

const HeadingContents = styled.div`
  display: flex;
  align-items: center;
`;


const HeadingDate = styled.p`
  margin-right: 11px;
`;

const HeadingLine = styled.span`
  width: 100%;
  height: 1px;
  margin-left: 19px;
  background-color: ${props => props.theme.colors.gray};
`;

const HeadingCategory = styled.p`
  &.gray {
    color: ${props => props.theme.colors.gray};
  }

  &.black {
    color: ${props => props.theme.colors.black};
  }
`;

const Description = styled.h2`
  font-weight: normal;
  color: ${props => props.theme.colors.black};

  &.small {
    font-size: 14px;
    font-size: 1.4rem;
  }

  &.large {
    font-size: 20px;
    font-size: 2rem;
    line-height: 1.6;
  }
`;

const NewsList = (props: Props) => {
  const {
    date,
    category,
    description,
    categoryColor,
    descriptionSize
  } = props;

  return (
    <Content>
      <HeadingWrap>
        <HeadingInner>
          <HeadingContents>
            <HeadingDate>
              <DinCondensed size={SIZE_XSM} text={date} />
            </HeadingDate>
            <HeadingCategory className={categoryColor}>
              <DinCondensed size={SIZE_XSM} text={category} />
            </HeadingCategory>
          </HeadingContents>
          <HeadingLine />
        </HeadingInner>
      </HeadingWrap>
      <Description className={descriptionSize}>{description}</Description>
    </Content>
  );
};

export default NewsList;
