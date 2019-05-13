import React from 'react';
import styled from 'styled-components';

import LogoName from '../atoms/logo/logo-name';
import Color from '../../constants/styles/color';

const FooterWrap = styled.footer`
  width: 100%;
`;

const FooterInner = styled.div`
  width: 100%;
  padding: 150px 25px;
  background-size: cover;
`;

const FooterText = styled.p`
  font-size: 14px;
  font-size: 1.4rem;
  line-height: 1.71;
  letter-spacing: 0.004em;
  color: ${Color.GRAY};
  margin-bottom: 40px;
`;

const LogoWrap = styled.div`
  margin-bottom: 35px;
`;

const FooterCopy = styled.small`
  font-size: 10px;
  font-size: 1rem;
  line-height: 1.4;
  letter-spacing: 0.004em;
  color: ${Color.GRAY};
`;

// フッターコンポーネント
const Footer = () => (
  <FooterWrap>
    <FooterInner>
      <FooterText>SINCE 1996</FooterText>
      <LogoWrap>
        <LogoName />
      </LogoWrap>
      <FooterCopy>© bumpofchicken.com. All rights Reserved.</FooterCopy>
    </FooterInner>
  </FooterWrap>
);

export default Footer;
