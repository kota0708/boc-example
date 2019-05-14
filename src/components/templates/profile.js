import React, { Fragment } from 'react';
import styled from 'styled-components';

import Twitter from '../atoms/icons/twitter';
import Image from '../atoms/images/fit-image';

import Member from '../molecules/profile/member';
import HistoryLink from '../molecules/profile/history-link';
import Color from '../../constants/styles/color';

const ContentsWrap = styled.div`
  margin-bottom: 42px;
`;

const SnsLinkWrap = styled.div`
  padding: 0 25px;
`;

const SnsLink = styled.a`
  color: ${Color.BLACK};
  text-decoration: none;
  font-size: 10px;
  font-size: 1rem;
  line-height: 1.6;
  letter-spacing: 0.0004em;
`;

const SnsLinkInner = styled.div`
  display: inline-flex;
  align-items: center;
`;

const IconWrap = styled.div`
  width: 26px;
  height: 20px;
  margin-right: 17px;
`;

const Profile = () => (
  <Fragment>
    <ContentsWrap>
      <Image url="/images/photo-artists.jpg" />
    </ContentsWrap>
    <ContentsWrap>
      <Member />
    </ContentsWrap>
    <ContentsWrap>
      <SnsLinkWrap>
        <SnsLink href="#">
          <SnsLinkInner>
            <IconWrap>
              <Twitter />
            </IconWrap>
            <p>boc_chama</p>
          </SnsLinkInner>
        </SnsLink>
      </SnsLinkWrap>
    </ContentsWrap>
    <HistoryLink />
  </Fragment>
);

export default Profile;
