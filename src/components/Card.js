import React from 'react'
import { Comments } from './index'
import CommentService from '../services/CommentService';
import getToken from '../utils/getToken';
import { useFormik } from 'formik'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons'

export default function(props) {
  const { title,
    author,
    description,
    comments,
    requestId,
    likes = 0,
    disLikes = 0 
  } = props

  const richDescription = { __html: description }

  const formik = useFormik({
    initialValues: {
      content: '',
    },
    onSubmit: ({ content }, { resetForm }) => {
      resetForm();
      CommentService
        .postComment({ comment: {content, request_id: requestId }}, getToken())
        .then(({ status, data }) => {
          const {requests, addRequest } = props
          addRequest(requests.map(request =>
            request.id == requestId ? { ...request, comments: [...request.comments, data]} : { ...request }))
        })
        .catch((err) => console.log(err));
    },
  });
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
          <Comments key={`c-${comment.id}`} author={comment.author} content={comment.content}/>
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
                    name="content"
                    autoComplete="off"
                    onChange={formik.handleChange}
                    value={formik.values.content}
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
              <a className="button is-info" onClick={formik.handleSubmit}>
                Comentar
              </a>
            </div>
          </div>
        </nav>
      </article>
    </div>
  );
}
