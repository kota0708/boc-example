/* @flow */

import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Seo from '../seo';
import Layout from '../layout';
import { setPageName } from '../actions/global';

type Props = {
  setPageName: () => void
};

class Goods extends Component<Props> {

  componentDidMount() {
    this.props.setPageName('GOODS');
  }

  render() {
    return (
      <div>
        <Seo
          description="BUMP OF CHICKENオフィシャルサイト。ニュース、ディスコグラフィー、スタッフダイアリー、GOODS、PICSなど。"
          lang="ja"
          title="GOODS | BUMP OF CHICKEN official website"
        />
        <Layout>
          GOODS!!
        </Layout>
      </div>
    );
  }
}

const mapStateToProps = () => ({});
const mapDispatchToProps = dispatch => bindActionCreators({
  setPageName
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Goods);
