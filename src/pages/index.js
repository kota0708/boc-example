/* @flow */
import React, { useEffect } from 'react';
import { Link } from 'gatsby';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Seo from '../seo';
// import Layout from '../layout';
import Top from '../components/templates/top';
import { init } from '../actions/global';
import { loadTopJson } from '../actions/news';
import type { TNewsList, TNewsPickup } from '../flow';

type Props = {
  init: () => void,
  loadTopJson: () => void, // newsのトップ記事読み込むよう
  newsData: { pickup: Array<TNewsPickup>, list: Array<TNewsList> }
};


const Wrap = styled.main`
  padding-top: 124px;
`;

const IndexPage = (props: Props) => {
  const {
    init,
    loadTopJson,
    newsData
  } = props;

  useEffect(() => {
    init({
      pageName: '',
      isSubPage: false,
      parentUrl: ''
    });

    if (newsData === null) {
      loadTopJson();
    }

    // unmount
    return () => null;
  }, []);

  console.log('top ----->');
  console.log(newsData);

  const contents = newsData ? (
    <Top newsData={newsData.list} />
  ) : (
    <div>loading...</div>
  );

  return (
    <div>
      <Seo
        description="BUMP OF CHICKENオフィシャルサイト。ニュース、ディスコグラフィー、スタッフダイアリー、GOODS、PICSなど。"
        lang="ja"
        title="BUMP OF CHICKEN official website"
      />
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
            <Link to="/discography/detail">discographyDetail</Link>
          </li>
          <li>
            <Link to="/live/">Live</Link>
          </li>
          <li>
            <Link to="/live/detail">Live-detail</Link>
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
        {contents}
      </Wrap>
    </div>
  );
};

const mapStateToProps = state => ({
  newsData: state.news.topData
});
const mapDispatchToProps = dispatch => bindActionCreators({
  init,
  loadTopJson
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IndexPage);
