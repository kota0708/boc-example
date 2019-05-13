/* @flow */

import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Seo from '../../seo';
import Layout from '../../layout';
import { setPageName } from '../../actions/global';

import NewsTop from '../../components/templates/news/top';

type Props = {
  setPageName: () => void
};

class News extends Component<Props> {

  componentDidMount() {
    this.props.setPageName('NEWS');
  }

  render() {
    return (
      <div>
        <Seo
          description="BUMP OF CHICKENオフィシャルサイト。ニュース、ディスコグラフィー、スタッフダイアリー、GOODS、PICSなど。"
          lang="ja"
          title="NEWS | BUMP OF CHICKEN official website"
        />
        <Layout>
          <NewsTop />
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
)(News);
