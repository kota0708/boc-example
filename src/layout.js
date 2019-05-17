// @flow
import React, { Component, Fragment } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import styled, { ThemeProvider } from 'styled-components';
import { clickMenu, clickLogo } from './actions/global';

import GlobalStyle from './global-style';
import Header from './components/organisms/header';
import Footer from './components/organisms/footer';
import Menu from './components/templates/menu';
import FixedLayout from './layout/fixed-layout';
import styles from './constants/styles';

type Props = {
  children: React.Node,
  clickMenu: () => void,
  clickLogo: () => void, // 左上のロゴクリックのとき
  isMenuOpen: boolean, // headerのメニュー開閉用のflag
  pageName: string, // 現在表示してるpageName
  isSubPage: boolean, // 子のページかどうか
  parentUrl: string // 親ページのURL
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
      clickLogo,
      isMenuOpen,
      pageName,
      isSubPage,
      parentUrl
    } = this.props;

    // グローバルメニューを表示、非表示をさせる
    const hasMenu = (this.props.isMenuOpen ? (
      <MenuWrap>
        <Menu
          onClose={clickMenu}
          onLogoClick={clickLogo}
          currentPageName={pageName}
        />
      </MenuWrap>
    ) : null);

    return (
      <Fragment>
        <ThemeProvider theme={styles}>
          <div>
            <GlobalStyle />
            <Header
              onClick={clickMenu}
              onClickLogo={clickLogo}
              isMenuOpen={isMenuOpen}
              pageName={pageName}
              isSubPage={isSubPage}
              parentUrl={parentUrl}
            />
            {hasMenu}
            <FixedLayout top={this.state.currentScrollTop} isHeaderModal={isMenuOpen}>
              <main>
                { children }
              </main>
            </FixedLayout>
            <Footer />
          </div>
        </ThemeProvider>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  isMenuOpen: state.global.isOpen,
  pageName: state.global.pageName,
  isSubPage: state.global.isSubPage,
  parentUrl: state.global.parentUrl
});
const mapDispatchToProps = dispatch => bindActionCreators({
  clickMenu,
  clickLogo
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Layout);
