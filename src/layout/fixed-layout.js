/* @flow */
import React from 'react';

type Props = {
  top?: number,
  isHeaderModal?: boolean,
  children?: React.Node
};

/**
 * fixedで固定されるLayoutのcomponent
 * @param props
 * @returns {*}
 * @constructor
 */
const FixedLayout = (props: Props) => {
  const { top, children, isHeaderModal } = props;
  const style = isHeaderModal ? { top: `${top}px`, position: 'fixed' } : null;
  return (
    <div style={style}>
      {children}
    </div>
  );
};

FixedLayout.defaultProps = {
  top: 0,
  isHeaderModal: false,
  children: null
};

export default FixedLayout;
