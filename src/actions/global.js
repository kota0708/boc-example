export const CLICK_MENU = '@@GLOBAL/clickMenu';
export const SET_PAGE_NAME = '@@GLOBAL/setPageName';

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

export const setPageName = pageName => dispatch => {
  dispatch({
    type: SET_PAGE_NAME,
    payload: {
      pageName
    }
  });
};
