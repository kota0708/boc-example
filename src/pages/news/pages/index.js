/* @flow */
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Seo from '../../../seo';
import Layout from '../../../layout';
import { setPageName } from '../../../actions/global';

import Page from '../../../components/templates/news/page';

type Props = {
  setPageName: () => void
};

class NewsDitail extends Component<Props> {

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
          <Page />
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
)(NewsDitail);
