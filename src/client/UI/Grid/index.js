import React, { memo } from 'react';

import './critical.scss';

const Grid = ({
  className = null,
  direction = 'row',
  wrap = 'wrap',
  justify = null,
  align = null,
  alignContent = null,
  gutters = null,
  children,
}) => {
  const cls = [
    'grid',
    className,
    direction && `grid--direction-${direction}`,
    wrap && `grid--wrap-${wrap}`,
    justify && `grid--justify-${justify}`,
    align && `grid--align-${align}`,
    alignContent && `grid--content-${alignContent}`,
    gutters && `grid--gutters-${gutters}`,
  ].filter(Boolean).join(' ');

  return (
    <div className={cls}>
      {children}
    </div>
  );
};

export default memo(Grid);
