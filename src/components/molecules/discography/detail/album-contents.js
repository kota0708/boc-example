/* @flow */
import React from 'react';
import styled from 'styled-components';

import Color from '../../../../constants/styles/color';

type Props = {
  title?: string, // アルバムリストのタイトルを受け取る
  lists?: Array<Object> // アルバムのリストを受け取る
}

const Wrap = styled.div`
  width: 100%;
`;

const Heading = styled.div`
  width: 100%;
  display: flex;
`;

const HeadingLine = styled.div`
  /* 86 / (375 - 50) * 100 */
  width: 26.5%;
  position: relative;

  &::after {
    content: '';
    width: 100%;
    height: 1px;
    background-color: ${Color.GRAY};
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    margin: auto 0;
  }
`;

const HeadingTitleWrap = styled.div`
  /* 218 / (375 - 50) * 100 */
  width: 67.1%;
  margin-left: 20px;
`;

const HeadingTitle = styled.h4`
  font-size: 14px;
  font-size: 1.4rem;
  font-weight: normal;
  line-height: 1.71;
  letter-spacing: 0.4px;
  color: ${Color.GRAY};
`;

const AlbumContents = (props: Props) => {
  const {
    title,
    lists
  } = props;

  console.log(lists);

  return (
    <Wrap>
      <Heading>
        <HeadingLine />
        <HeadingTitleWrap>
          <HeadingTitle>{title}</HeadingTitle>
        </HeadingTitleWrap>
      </Heading>
    </Wrap>
  );
};

AlbumContents.defaultProps = {
  // 仮のデータです
  // TODO: 後でJSONかjsで外部化する
  title: '収録曲',
  lists: [
    {
      id: 1,
      name: 'pathfinder'
    },
    {
      id: 2,
      name: 'GO'
    },
    {
      id: 3,
      name: '天体観測'
    },
    {
      id: 4,
      name: 'ray'
    }
  ]
};

export default AlbumContents;
