// @flow
import React from 'react';
import styled from 'styled-components';
// import pageData from '../../../constants/stub/news/page';
// import { SIZE_LG } from '../../../constants/styles/size';

import Heading from '../../molecules/discography/detail/heading';
import PanelLink from '../../molecules/panel-link';
import AlbumHeading from '../../molecules/discography/detail/album-heading';
import AlbumContents from '../../molecules/discography/detail/album-contents';
// import Lists from '../../organisms/discography/top/lists';


type Props = {
  data?: Array<Object>, // discographyのリストデータを受け取る
};

const Wrap = styled.div`
  padding-top: 80px;
`;

const HeadingWrap = styled.div`
  margin-bottom: 60px;
`;

const ContentsWrap = styled.div`
  padding: 0 25px;
  margin-bottom: 40px;
`;

const Detail = (props: Props) => {
  const { data } = props;

  console.log(data);

  return (
    <Wrap>
      <HeadingWrap>
        <Heading />
      </HeadingWrap>
      <ContentsWrap>
        <AlbumHeading />
      </ContentsWrap>
      <ContentsWrap>
        <AlbumContents />
      </ContentsWrap>
      <PanelLink />
    </Wrap>
  );
};

Detail.defaultProps = {
  // 仮のデータです
  // TODO: 後でJSONかjsで外部化する
  data: [
    {
      imgUrl: '/images/photos/0.jpg',
      type: 'SINGLE',
      link: '/discography/pages',
      title: 'Aurora'
    }
  ]
};

export default Detail;
