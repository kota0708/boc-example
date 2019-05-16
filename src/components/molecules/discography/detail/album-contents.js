/* @flow */
import React from 'react';
import styled, { css } from 'styled-components';

import Color from '../../../../constants/styles/color';

type Props = {
  title?: string, // アルバムリストのタイトルを受け取る
  lists?: Array<Object> // アルバムのリストを受け取る
}

const Text = css`
  font-size: 14px;
  font-size: 1.4rem;
  font-weight: normal;
  line-height: 1.71;
  letter-spacing: 0.4px;
`;

const LeftWidth = css`
  /* 86 / (375 - 50) * 100 */
  width: 26.5%;
`;

const RightWidth = css`
  /* 218 / (375 - 50) * 100 */
  width: 67.1%;
  margin-left: 20px;
`;

const Wrap = styled.div`
  width: 100%;
`;

const Heading = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 10px;
`;

const HeadingLine = styled.div`
  ${LeftWidth}
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
  ${RightWidth}
`;

const HeadingTitle = styled.h4`
  ${Text}
  color: ${Color.GRAY};
`;

const Contents = styled.ul`
  width: 100%;
`;

const ContentsList = styled.li`
  ${Text}
  display: flex;
`;

const ListId = styled.p`
  ${LeftWidth}
  color: ${Color.GRAY};
`;

const ListTitle = styled.p`
  ${RightWidth}
  color: ${Color.BLACK};
`;

const AlbumContents = (props: Props) => {
  const {
    title,
    lists
  } = props;

  const list = lists.map((r, i) => (
    <ContentsList key={i}>
      <ListId>{r.id}</ListId>
      <ListTitle>{r.name}</ListTitle>
    </ContentsList>
  ));

  return (
    <Wrap>
      <Heading>
        <HeadingLine />
        <HeadingTitleWrap>
          <HeadingTitle>{title}</HeadingTitle>
        </HeadingTitleWrap>
      </Heading>
      <Contents>
        {list}
      </Contents>
    </Wrap>
  );
};

AlbumContents.defaultProps = {
  // 仮のデータです
  // TODO: 後でJSONかjsで外部化する
  title: '収録曲',
  lists: [
    {
      id: '01',
      name: 'pathfinder'
    },
    {
      id: '02',
      name: 'GO'
    },
    {
      id: '03',
      name: '天体観測'
    },
    {
      id: '04',
      name: 'ray'
    }
  ]
};

export default AlbumContents;
