/* @flow */
import React from 'react';
import styled from 'styled-components';

import { TLiveDetail } from '../../../flow';
import { SIZE_SM } from '../../../constants/styles/size';

import DinCondensed from '../../atoms/text/din-condensed';

import Heading from '../../molecules/live/detail/heading';
import FreeMessage from '../../molecules/live/detail/free-message';
import Share from '../../molecules/sns/sns-share';

import GlobalSlide from '../../organisms/slide/global-slide';
import Schedules from '../../organisms/live/schedules';

type Props = {
  data?: Array<TLiveDetail>
};

const Wrap = styled.div`
  padding-top: 80px;
`;

const ContentsWrap = styled.div`
  padding: 0 25px;
  margin-bottom: 60px;
`;

const Contents = styled.div`
  margin-bottom: 60px;
`;

const Title = styled.h3`
  margin-bottom: 32px;
  font-weight: normal;
`;

const Detail = (props: Props) => {

  const {
    data
  } = props;

  return (
    <Wrap>
      <Contents>
        <Heading
          imgUrl={data.imgUrl}
          title={data.title}
          year={data.year}
        />
      </Contents>
      <ContentsWrap>
        <Contents>
          <FreeMessage
            text={data.freeMessage}
          />
        </Contents>
        <Contents>
          <Title>
            <DinCondensed size={SIZE_SM} text="TICKET" />
          </Title>
          <FreeMessage
            text={data.ticketMessage}
          />
        </Contents>
        <Contents>
          <Title>
            <DinCondensed size={SIZE_SM} text="SCHEDULE" />
          </Title>
          <Schedules
            data={data.ScheduleList}
          />
        </Contents>
        <Share />
      </ContentsWrap>
      <GlobalSlide />
    </Wrap>
  );
};

Detail.defaultProps = {
  // 仮のデータです
  // TODO: 後でJSONかjsで外部化する
  data: {
    imgUrl: '/images/photos/0.jpg',
    title: 'BUMP OF CHICKEN\nTOUR 2017-2018\nPATHFINDER',
    year: '2019',
    freeMessage: '「Hello,world!/コロニー」の購入者限定LIVEのため、チケットの一般販売はございません。\n\n本公演では、映像収録および写真撮影用のカメラが会場内・会場周辺にて、ご来場のお客様の様子を収録・撮影させて頂く場合がございます。収録された映像・写真は公式HP上での写真掲載・商品化・プロモーション等に使用される可能性がございますので、予めご了承下さい。',
    ticketMessage: '料金：8,800円（税込）',
    ScheduleList: [
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
  }
};

export default Detail;
