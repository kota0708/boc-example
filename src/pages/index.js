/* @flow */
import React, { useEffect } from 'react';
import { Link } from 'gatsby';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Seo from '../seo';
import Layout from '../layout';
import Top from '../components/templates/top';
import { init } from '../actions/global';

type Props = {
  init: () => void
};


const Wrap = styled.main`
  padding-top: 124px;
`;

const IndexPage = (props: Props) => {
  const {
    init
  } = props;

  useEffect(() => {
    init({
      pageName: '',
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
        title="BUMP OF CHICKEN official website"
      />
      <Layout>
        <nav>
          <ul>
            <li>
              <Link to="/news/">News</Link>
            </li>
            <li>
              <Link to="/profile/">Profile</Link>
            </li>
            <li>
              <Link to="/history/">Hitory</Link>
            </li>
            <li>
              <Link to="/discography/">discography</Link>
            </li>
            <li>
              <Link to="/live/">Live</Link>
            </li>
            <li>
              <Link to="/videos/">Videos</Link>
            </li>
            <li>
              <Link to="/photos/" state={{ hoge: true }}>photo</Link>
            </li>
            <li>
              <Link to="/goods/">Goods</Link>
            </li>
          </ul>
        </nav>
        <Wrap>
          <Top />
        </Wrap>
      </Layout>
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
)(IndexPage);
