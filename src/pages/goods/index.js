/* @flow */
import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Seo from '../../seo';
import { init } from '../../actions/global';
import GoodsTopTemplate from '../../components/templates/goods/goods-top-template';
import GoodsData from '../../constants/goods';

type Props = {
  init: () => void
};

const Container = styled.div`
  padding-top: 75px;
`;

const Goods = (props: Props) => {
  const {
    init
  } = props;

  useEffect(() => {
    init({
      pageName: 'GOODS',
      isSubPage: false,
      parentUrl: ''
    });
    // unmount
    return () => null;
  }, []);

  return (
    <div>
      <Seo
        description="BUMP OF CHICKENオフィシャルサイト。ニュース、ディスコグラフィー、スタッフダイアリー、GOODS、PICSなど。"
        lang="ja"
        title="GOODS | BUMP OF CHICKEN official website"
      />
      <Container>
        <GoodsTopTemplate data={GoodsData.data} />
      </Container>
    </div>
  );
};


const mapStateToProps = () => ({});
const mapDispatchToProps = dispatch => bindActionCreators({
  init
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Goods);
