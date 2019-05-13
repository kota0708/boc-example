// @flow

import React from 'react';
import styled from 'styled-components';

import Star from '../atoms/star';

// ?がないと
// propType "onClick" is required and should not have a defaultProps declaration
// defaultProp "onClick" defined for isRequired propType react/default-props-match-prop-types
// と怒られる。
// ちなみにドキュメントも同じように設定されていました。
// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-default-props.md

type Props = {
  onClick?: () => void
};

const ContentsWrap = styled.div`
  width: 100%;
  cursor: pointer;
`;

const Contents = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 4px;
  height: 4px;

  :last-child {
    margin-bottom: 0;
  }
`;

const StarWrap = styled.div`
  margin-right: 2px;
`;

const Line = styled.span`
  display: block;
  width: 100%;
  height: 100%;
  background-color: #000;
`;

const MenuButton = (props: Props) => {
  const { onClick } = props;

  return (
    <ContentsWrap
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
    >
      <Contents>
        <StarWrap>
          <Star />
        </StarWrap>
        <Line />
      </Contents>
      <Contents>
        <StarWrap>
          <Star />
        </StarWrap>
        <Line />
      </Contents>
      <Contents>
        <StarWrap>
          <Star />
        </StarWrap>
        <Line />
      </Contents>
      <Contents>
        <StarWrap>
          <Star />
        </StarWrap>
        <Line />
      </Contents>
    </ContentsWrap>
  );
};

MenuButton.defaultProps = {
  onClick: () => null
};

export default MenuButton;
