// @flow
import React, { Component, Fragment } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { clickMenu } from './actions/global';

import GlobalStyle from './global-style';
import Header from './components/organisms/header';
import Footer from './components/organisms/footer';
import FixedLayout from './layout/fixed-layout';

type Props = {
  children: React.Node,
  clickMenu: () => void,
  isMenuOpen: boolean, // headerのメニュー開閉用のflag
  pageName: string // 現在表示してるpageName
};

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
    return (
      <Fragment>
        <GlobalStyle />
        <Header
          onClick={clickMenu}
          isMenuOpen={isMenuOpen}
          pageName={pageName}
        />
        <FixedLayout top={this.state.currentScrollTop} isHeaderModal={isMenuOpen}>
          { children }
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
