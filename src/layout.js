// @flow
import React, { Component, Fragment } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import styled from 'styled-components';
import { clickMenu } from './actions/global';

import GlobalStyle from './global-style';
import Header from './components/organisms/header';
import Footer from './components/organisms/footer';
import Menu from './components/templates/menu';
import FixedLayout from './layout/fixed-layout';

type Props = {
  children: React.Node,
  clickMenu: () => void,
  isMenuOpen: boolean, // headerのメニュー開閉用のflag
  pageName: string // 現在表示してるpageName
};

const MenuWrap = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #fff;
  z-index: 2;
  overflow-x: hidden;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
`;


// header / footerここに記載
class Layout extends Component<Props> {

  constructor(props) {
    super(props);
    this.state = {
      currentScrollTop: 0
    };
  }

  shouldComponentUpdate(nextProps) {
    return nextProps !== this.props;
  }

  static getDerivedStateFromProps(nextProps) {
    if (nextProps.isMenuOpen) {
      const element = document.documentElement;
      const y = element.scrollTop || document.body.scrollTop;
      return {
        currentScrollTop: y
      };
    }
    return null;
  }

  render() {
    const {
      children,
      clickMenu,
      isMenuOpen,
      pageName
    } = this.props;

    // グローバルメニューを表示、非表示をさせる
    const hasMenu = (this.props.isMenuOpen ? (
      <MenuWrap>
        <Menu
          onClose={clickMenu}
          currentPageName={pageName}
        />
      </MenuWrap>
    ) : null);

    return (
      <Fragment>
        <GlobalStyle />
        <Header
          onClick={clickMenu}
          isMenuOpen={isMenuOpen}
          pageName={pageName}
        />
        {hasMenu}
        <FixedLayout top={this.state.currentScrollTop} isHeaderModal={isMenuOpen}>
          <main>
            { children }
          </main>
        </FixedLayout>
        <Footer />
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  isMenuOpen: state.global.isOpen,
  pageName: state.global.pageName
});
const mapDispatchToProps = dispatch => bindActionCreators({
  clickMenu
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Layout);
