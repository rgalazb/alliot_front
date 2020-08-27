import React from 'react';

export default function({ author, content }) {
  return(
    <article className="media mt-2 mb-3">
      <div className="media-content">
        <div className="content">
          <p className="ml-3">
            <strong className="ml-2">{author}</strong> <em>dijo</em>
            <br/>
              {content}
            <br/>
          </p>
        </div>
      </div>
    </article>
  );
}