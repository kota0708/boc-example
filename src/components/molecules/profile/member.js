import React from 'react';
import styled, { css } from 'styled-components';
// import { Link } from 'gatsby';

import { SIZE_XSM, SIZE_MD } from '../../../constants/styles/size';
import DinCondensed from '../../atoms/text/din-condensed';
import Color from '../../../constants/styles/color';
import member from '../../../constants/member';

const Wrap = styled.div`
  padding: 0 25px;
`;

const Inner = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Contents = styled.div`
  /* 128 / (375 - 50) * 100 */
  width: 39.4%;

  /* 横のマージンだけ動的なので%で指定 */
  /* 44 / (375 - 50) * 100 */
  margin: 0 44px 13.5% 0;

  :nth-child(even){
    margin-right: 0;
  }

  :nth-child(n + 2) {
    margin-bottom: 0;
  }
`;

const Responsible = styled.p`
  color: ${Color.WHITE};
  margin-bottom: 12px;
`;

const NameEn = styled.h2`
  color: ${Color.BLACK};
  word-break: break-word;
  margin-bottom: 6px;
`;

const Text = css`
  font-size: 14px;
  font-size: 1.4rem;
  line-height: 1.71;
  letter-spacing: 0.0004em;
`;

const NameJa = styled.p`
  ${Text}
  color: ${Color.GRAY};
  margin-bottom: 16px;
`;

const Description = styled.div`
  ${Text}
  color: ${Color.BLACK};
`;

const Member = () => {

  const contents = member.data.map((r, i) => (
    <Contents
      key={i}
    >
      <Responsible>
        <DinCondensed size={SIZE_XSM} text={r.responsible} />
      </Responsible>
      <NameEn>
        <DinCondensed size={SIZE_MD} text={r.name_en} />
      </NameEn>
      <NameJa>{r.name_ja}</NameJa>
      <Description>
        <p>{r.birth}</p>
        <p>{r.constellation}</p>
        <p>{r.type}</p>
      </Description>
    </Contents>
  ));

  return (
    <Wrap>
      <Inner>
        {contents}
      </Inner>
    </Wrap>
  );
};

export default Member;
