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

class Videos extends Component<Props> {

  componentDidMount() {
    this.props.setPageName('VIDEOS');
  }

  render() {
    return (
      <div>
        <Seo
          description="BUMP OF CHICKENオフィシャルサイト。ニュース、ディスコグラフィー、スタッフダイアリー、GOODS、PICSなど。"
          lang="ja"
          title="VIDEOS | BUMP OF CHICKEN official website"
        />
        <Layout>
          Videos!!
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
)(Videos);
