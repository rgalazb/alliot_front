import React from 'react';

export default function({ children, offset, size }) {
  return (
    <div className={`column is-offset-${offset} is-${size}`}>
      { children }
    </div>
  );
}
