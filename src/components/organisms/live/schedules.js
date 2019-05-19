/* @flow */
import React from 'react';
import styled from 'styled-components';

import Schedule from '../../molecules/live/detail/schedule';

type Props = {
  // 開始地情報を受取る
  data?: Array<{
    date?: string,
    place?: string,
    description?: string
  }>
}

const ScheduleWrap = styled.div`
  margin-bottom: 42px;

  :last-child {
    margin-bottom: 0;
  }
`;

const schedule = (props: Props) => {
  const {
    data
  } = props;

  const contents = data.map((r, i) => (
    <ScheduleWrap key={i}>
      <Schedule
        date={r.date}
        place={r.place}
        description={r.description}
      />
    </ScheduleWrap>
  ));

  return (
    <div>
      {contents}
    </div>
  );
};

schedule.defaultProps = {
  // 仮のデータです
  // TODO: 後でJSONかjsで外部化する
  data: [
    {
      date: '2019-7-13',
      place: '埼玉県 メットライフドーム',
      description: 'OPEN 16:00 / START 18:00\nライブマスターズ（TEL: 03-6379-4744 / 平日12:00〜17:00）\nディスクガレージ（TEL: 050-5533-0888 / 平日12:00〜19:00）'
    },
    {
      date: '2019-7-15',
      place: '埼玉県 メットライフドーム',
      description: 'OPEN 16:00 / START 18:00\nライブマスターズ（TEL: 03-6379-4744 / 平日12:00〜17:00）\nディスクガレージ（TEL: 050-5533-0888 / 平日12:00〜19:00）'
    },
    {
      date: '2019-7-15',
      place: '埼玉県 メットライフドーム',
      description: 'OPEN 16:00 / START 18:00\nライブマスターズ（TEL: 03-6379-4744 / 平日12:00〜17:00）\nディスクガレージ（TEL: 050-5533-0888 / 平日12:00〜19:00）'
    },
    {
      date: '2019-7-15',
      place: '埼玉県 メットライフドーム',
      description: 'OPEN 16:00 / START 18:00\nライブマスターズ（TEL: 03-6379-4744 / 平日12:00〜17:00）\nディスクガレージ（TEL: 050-5533-0888 / 平日12:00〜19:00）'
    }
  ]
};

export default schedule;
