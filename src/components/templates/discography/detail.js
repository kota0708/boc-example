// @flow
import React from 'react';
// import styled from 'styled-components';
// import pageData from '../../../constants/stub/news/page';
// import { SIZE_LG } from '../../../constants/styles/size';

// import Lists from '../../organisms/discography/top/lists';
// import Share from '../../molecules/sns/sns-share';


type Props = {
  data?: Array<Object>, // discographyのリストデータを受け取る
};

// const Wrap = styled.div`
//   padding-top: 80px;
// `;

const Detail = (props: Props) => {
  const { data } = props;

  console.log(data);

  return (
    <div>
      <p>ditail</p>
    </div>
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
