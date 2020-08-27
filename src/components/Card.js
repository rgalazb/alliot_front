import React from 'react'
import { Comments } from './index'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons'

export default function({ title, author, description, comments, likes = 0, disLikes = 0}) {
  const richDescription = { __html: description }
  return (
    <div className="card mt-6">
      <header className="card-header">
        <p className="card-header-title">
          { title } <small className="ml-1"><em> por { author } </em> </small>
        </p>
      </header>
      <div className="card-content">
        <div className="content" dangerouslySetInnerHTML={richDescription}>
        </div>
      </div>
      <footer className="card-footer">
        <a href="#" className="card-footer-item"> {likes} <FontAwesomeIcon icon={faThumbsUp} /> </a>
        <a href="#" className="card-footer-item"> {disLikes} <FontAwesomeIcon icon={faThumbsDown} /> </a>
      </footer>
        {comments.map(comment =>
        <div>
          <Comments key={`c-${comment.id}`} author={comment.author} content={comment.content}/>
        </div>
        )}
      <article className="media">
        <div className="media-content">
          <div className="field">
            <div className="control">
              <div className="field">
                <div className="control">
                  <input
                    placeholder="Deja un comentario..."
                    type="text"
                    name="title"
                    autoComplete="off"
                    className="input"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <nav className="level">
          <div className="level-left">
            <div className="level-item">
              <a className="button is-info">Comentar</a>
            </div>
          </div>
        </nav>
      </article>
    </div>
  );
}
