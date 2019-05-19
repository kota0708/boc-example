/* @flow */
import React from 'react';
import styled from 'styled-components';

import { SIZE_SM } from '../../../constants/styles/size';
import DinCondensed from '../../atoms/text/din-condensed';
import ComingSoon from '../../molecules/goods/coming-soon';
import PanelLists from '../../organisms/panel-list';
import { TPanel } from '../../../flow';

type Props = {
  data: Array<TPanel>
};

const Container = styled.div`
  max-width: 86.67%;
  margin: 0 auto;
`;

const TextContainer = styled.div`
  position: relative;
`;

const Text = styled.p`
  font-weight: bold;
`;

const ComingSoonContainer = styled.div`
  position: absolute;
  top: 5px;
  left: 215px;
  transform: rotate(20deg);
`;

const DetailContainer = styled.div`
  margin-top: 68px;
`;

const DetailTitle = styled.p`
  font-size: 14px;
  font-size: 1.4rem;
  color: ${props => props.theme.colors.black};
  margin-bottom: 21px;
`;

const GoodsTopTemplate = (props: Props) => {
  const { data } = props;
  return (
    <Container>
      <TextContainer>
        <Text>
          <DinCondensed text="BUMP OF CHICKEN" size={SIZE_SM} />
          <br />
          <DinCondensed text="TOUR 2019 “aurora ark” GOODS" size={SIZE_SM} />
        </Text>
        <ComingSoonContainer>
          <ComingSoon />
        </ComingSoonContainer>
      </TextContainer>
      <DetailContainer>
        <DetailTitle>
          詳細や購入は、EMTG STOREにて!
        </DetailTitle>
        <PanelLists data={data} />
      </DetailContainer>
    </Container>
  );
};
export default GoodsTopTemplate;
