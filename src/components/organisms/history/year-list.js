/* @flow */
import React, { Fragment } from 'react';
import styled from 'styled-components';
// import { Link } from 'gatsby';

// import carouselData from '../../constants/stub/top/carousel';
// import easeOutQuint from '../../constants/styles/easing/ease-out-quint';

// import LogoSymbol from '../atoms/logo/logo-symbol';

// import Sns from '../molecules/sns/sns-top';
import Year from '../../molecules/history/yaer';

// import MenuContents from '../organisms/menu-contents';

type Props = {
  years?: Array<number>, // 年の配列を受け取る
  onClick?: () => void, // クリックイベントを受け取る
  currentYear?: number, // 現在選ばれている年を受け取る
}

const Wrap = styled.div`
  margin-bottom: 14px;
`;

const YearList = (props: Props) => {
  const {
    years,
    onClick,
    currentYear
  } = props;

  const year = years.map((r, i) => (
    <Wrap key={i}>
      <Year
        year={r}
        onClick={onClick}
        currentYear={currentYear}
      />
    </Wrap>
  ));

  return (
    <Fragment>
      { year }
    </Fragment>
  );
};

YearList.defaultProps = {
  /* eslint-disable max-len */
  years: [2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011, 2010, 2009, 2008, 2007, 2006, 2005, 2004, 2003, 2002, 2001, 2000, 1999, 1998, 1997, 1996],
  onClick: () => null,
  currentYear: null
};

export default YearList;
