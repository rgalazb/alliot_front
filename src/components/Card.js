import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons'

export default function({ title, description, likes = 0, disLikes = 0}) {
  return (
    <div className="card mt-6">
      <header className="card-header">
        <p className="card-header-title">
          {title}
        </p>
        <span className="icon">
          <i className="fas fa-angle-down" aria-hidden="true"></i>
        </span>
      </header>
      <div className="card-content">
        <div className="content">
          {description}
        </div>
      </div>
      <footer className="card-footer">
        <a href="#" className="card-footer-item"> {likes} <FontAwesomeIcon icon={faThumbsUp} /> </a>
        <a href="#" className="card-footer-item"> {disLikes} <FontAwesomeIcon icon={faThumbsDown} /> </a>
      </footer>
      <article className="media">
        <div className="media-content">
          <div className="content">
            <p>
              <strong>Barbara Middleton</strong>
              <br/>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porta eros lacus, nec ultricies elit blandit non. Suspendisse pellentesque mauris sit amet dolor blandit rutrum. Nunc in tempus turpis.
              <br/>
            </p>
          </div>
        </div>
      </article>

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
