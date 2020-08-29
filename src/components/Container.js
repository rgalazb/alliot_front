import React from 'react'

export default function({ children }) {
  return (
    <div className="section">
      <div className="container">
        { children }
      </div>
    </div>
  );
}
