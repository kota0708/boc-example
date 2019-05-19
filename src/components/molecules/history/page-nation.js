/* @flow */
import React, { Fragment } from 'react';
import styled from 'styled-components';

import { SIZE_XSM } from '../../../constants/styles/size';
import DinCondensed from '../../atoms/text/din-condensed';
import ArrowLink from '../../atoms/icons/arrow-link';

type Props = {
  isNext: boolean, // 次のページのページネーションか受け取る
  year: string, // 年を受け取る
  onClick: () => void // クリックイベントを受け取る
}

const Wrap = styled.button`
  display: flex;
  align-items: center;
  outline: none;
`;

const IconWrap = styled.div`
  width: 25px;
  height: 16px;

  &.right {
    margin-right: 13px;
  }

  &.left {
    margin-left: 13px;
  }
`;

const DinCondensedWrap = styled.div`
  padding-top: 0.7em;
`;

const PageNation = (props: Props) => {
  const {
    year,
    onClick,
    isNext
  } = props;

  const contents = isNext ? (
    <Fragment>
      <DinCondensedWrap>
        <DinCondensed size={SIZE_XSM} text={year} />
      </DinCondensedWrap>
      <IconWrap className="left">
        <ArrowLink />
      </IconWrap>
    </Fragment>
  ) : (
    <Fragment>
      <IconWrap className="right">
        <ArrowLink isRotate />
      </IconWrap>
      <DinCondensedWrap>
        <DinCondensed size={SIZE_XSM} text={year} />
      </DinCondensedWrap>
    </Fragment>
  );

  return (
    <Fragment>
      <Wrap
        onClick={(e) => {
          e.preventDefault();
          onClick();
        }}
      >
        {contents}
      </Wrap>
    </Fragment>
  );
};

export default PageNation;
