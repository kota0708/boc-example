/* @flow */
import React from 'react';
import styled, { css } from 'styled-components';

import shapingDate from '../../../../util/shaping-date';
import calculationDate from '../../../../util/calculation-date';
import nl2br from '../../../../util/nl2br';

type Props = {
  date?: string, // 日付を受け取る
  place?: string, // 開催地を受け取る
  description?: string // 詳細を受け取る
}

const MarginBottom = css`
  margin-bottom: 22px;
`;

const Wrap = styled.div`
  font-size: 14px;
  font-size: 1.4rem;
  line-height: 1.71;
  letter-spacing: 0.0004em;
`;

const Date = styled.p`
  ${MarginBottom}
`;

const Place = styled.h4`
  ${MarginBottom}
  font-weight: normal;
`;

const schedule = (props: Props) => {
  const {
    date,
    place,
    description
  } = props;

  return (
    <Wrap>
      <Date>
        {shapingDate(date)}
        &nbsp;
        {`(${calculationDate(date)})`}
      </Date>
      <Place>{place}</Place>
      <p>{nl2br(description)}</p>
    </Wrap>
  );
};

schedule.defaultProps = {
  date: '2019-7-13',
  place: '埼玉県 メットライフドーム',
  description: 'OPEN 16:00 / START 18:00\nライブマスターズ（TEL: 03-6379-4744 / 平日12:00〜17:00）\nディスクガレージ（TEL: 050-5533-0888 / 平日12:00〜19:00）'
};

export default schedule;
