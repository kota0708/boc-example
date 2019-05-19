/* @flow */
import React from 'react';
import styled from 'styled-components';

import nl2br from '../../../../util/nl2br';

type Props = {
  text?: string, // フリー項目のテキストを受け取る
}

const Text = styled.p`
  font-size: 14px;
  font-size: 1.4rem;
  font-weight: normal;
  line-height: 1.71;
  letter-spacing: 0.0004em;
`;

const FreeMessage = (props: Props) => {
  const {
    text
  } = props;

  return (
    <Text>
      {nl2br(text)}
    </Text>
  );
};

FreeMessage.defaultProps = {
  text: '「Hello,world!/コロニー」の購入者限定LIVEのため、チケットの一般販売はございません。\n\n本公演では、映像収録および写真撮影用のカメラが会場内・会場周辺にて、ご来場のお客様の様子を収録・撮影させて頂く場合がございます。収録された映像・写真は公式HP上での写真掲載・商品化・プロモーション等に使用される可能性がございますので、予めご了承下さい。'
};

export default FreeMessage;
