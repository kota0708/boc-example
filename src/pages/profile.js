/* @flow */
import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Seo from '../seo';
import { init } from '../actions/global';

import ProfileTemplate from '../components/templates/profile';

type Props = {
  init: () => void
};

const Wrap = styled.div`
  background-color: #bcc5cc;
`;

const Profile = (props: Props) => {
  const {
    init
  } = props;

  useEffect(() => {
    init({
      pageName: 'PROFILE',
      isSubPage: false,
      parentUrl: ''
    });
    // unmount
    return () => null;
  }, []);
  return (
    <Wrap>
      <Seo
        description="BUMP OF CHICKENオフィシャルサイト。ニュース、ディスコグラフィー、スタッフダイアリー、GOODS、PICSなど。"
        lang="ja"
        title="PROFILE | BUMP OF CHICKEN official website"
      />
      <ProfileTemplate />
    </Wrap>
  );
};


const mapStateToProps = () => ({});
const mapDispatchToProps = dispatch => bindActionCreators({
  init
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
