import React, { memo } from 'react';

import './critical.scss';

const GridItem = ({
  className = null,
  behavior = null,
  align = null,
  push = null,
  children,
}) => {
  const cls = [
    'grid-item',
    className,
    behavior && `grid-item--behavior-${behavior}`,
    align && `grid-item--align-${align}`,
    push && `grid-item--push-${push}`,
  ].filter(Boolean).join(' ');

  return (
    <div className={cls}>
      {children}
    </div>
  );
};

export default memo(GridItem);
