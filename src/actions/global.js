/** @flow * */
export const INIT = '@@GLOBAL/init';
export const CLICK_MENU = '@@GLOBAL/clickMenu';
export const CLICK_LOGO = '@@GLOBAL/clickLogo';

export const SET_PAGE_NAME = '@@GLOBAL/setPageName';
// export const ENTER_PAGE = '@@GLOBAL/enterPage';

type InitTypes = {
  pageName: string, // pageName
  isSubPage: boolean, // 子ページかどうか
  parentUrl: '' // 親ページのURL
};

/**
 * headerのハンバーガークリック時のaction
 * @returns {Function}
 */
export const clickMenu = () => (dispatch, getState) => {
  const { global } = getState();

  dispatch({
    type: CLICK_MENU,
    payload: {
      // 反転させる。
      isOpen: !global.isOpen
    }
  });
};

/**
 * ロゴクリックされたとき。
 * 強制的にメニューの開閉を閉じる。
 * @returns {Function}
 */
export const clickLogo = () => dispatch => {
  dispatch({
    type: CLICK_LOGO,
    payload: {
      isOpen: false
    }
  });
};

/**
 * 初期化
 * @param payload
 * @returns {Function}
 */
export const init = (payload: InitTypes) => dispatch => {
  dispatch({
    type: INIT,
    payload
  });
};


export const setPageName = pageName => dispatch => {
  dispatch({
    type: SET_PAGE_NAME,
    payload: {
      pageName
    }
  });
};
