/* @flow */
import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// import { Link } from 'gatsby';
import styled from 'styled-components';

import Seo from '../../seo';
import Layout from '../../layout';
import { init } from '../../actions/global';
import { loadJSON } from '../../actions/videos';
import { makeSelectedJsonData, makeSelectedIsLoading } from '../../selectors/videos';
import VideoTopTemplate from '../../components/templates/videos/video-top-template';

type Props = {
  init: () => void,
  loadJSON: () => void, // JSON読み込む関数
  isLoading: boolean,
  data: Object
};

const Container = styled.div`
  padding-top: 80px;
`;

const Videos = (props: Props) => {
  const {
    init,
    loadJSON,
    isLoading,
    data
  } = props;

  useEffect(() => {
    init({
      pageName: 'VIDEOS',
      isSubPage: false,
      parentUrl: ''
    });

    if (isLoading && data === null) {
      loadJSON(() => console.log('ok'));
    }
    console.log(props);
    // unmount
    return () => null;
  }, []);

  console.log(`isLoading: ${isLoading}`);
  console.log(data);


  /* const constens = (!isLoading && data !== null) ? data.data.map(d => (
    <Link to={`/videos/detail/?id=${d.id}`} key={d.id}>
      {d.title}
    </Link>
  )) : (<div>loading...</div>); */

  const contents = (!isLoading && data !== null)
    ? (<VideoTopTemplate data={data.data} />) : <div>loading...</div>;

  return (
    <div>
      <Seo
        description="BUMP OF CHICKENオフィシャルサイト。ニュース、ディスコグラフィー、スタッフダイアリー、GOODS、PICSなど。"
        lang="ja"
        title="VIDEOS | BUMP OF CHICKEN official website"
      />
      <Layout>
        <Container>
          {contents}
        </Container>
      </Layout>
    </div>
  );
};

const mapStateToProps = () => createStructuredSelector({
  isLoading: makeSelectedIsLoading(),
  data: makeSelectedJsonData()
});
const mapDispatchToProps = dispatch => bindActionCreators({
  init,
  loadJSON
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Videos);
