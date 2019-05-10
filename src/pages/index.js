/* @flow */
import React, { Component } from 'react';
import { Link } from 'gatsby';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Seo from '../seo';
import Layout from '../layout';
import Top from '../components/templates/top';
import { setPageName } from '../actions/global';

type Props = {
  setPageName: () => void
};


const Wrap = styled.main`
  padding-top: 124px;
`;

class IndexPage extends Component<Props> {

  componentDidMount() {
    this.props.setPageName('');
  }

  render() {
    return (
      <div>
        <Seo
          description="BUMP OF CHICKENオフィシャルサイト。ニュース、ディスコグラフィー、スタッフダイアリー、GOODS、PICSなど。"
          lang="ja"
          title="BUMP OF CHICKEN official website"
        />
        <Layout>
          <nav>
            <ul>
              <li>
                <Link to="/photo" state={{ hoge: true }}>photo</Link>
              </li>
            </ul>
          </nav>
          <Wrap>
            <Top />
          </Wrap>
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
)(IndexPage);
