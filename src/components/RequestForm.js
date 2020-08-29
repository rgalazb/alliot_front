import React, { useState } from 'react'
import { useFormik } from "formik";
import RequestService from '../services/RequestService';
import getToken from '../utils/getToken';
import ReactQuill from 'react-quill';
import { Box } from './index'

export default function({ requests, addRequest }) {

  const [description, setDescription] = useState('');

  const formik = useFormik({
    initialValues: {
      title: '',
    },
    onSubmit: ({ title }, { resetForm }) => {
      setDescription('');
      resetForm();
      RequestService
        .postRequest({ request: {title, description }}, getToken())
        .then(({ status, data }) => {
          addRequest([{ ...data }, ...requests])
        })
        .catch((err) => console.log(err));
    },
  });
  return (
    <div>
      <Box>
        <form onSubmit={formik.handleSubmit}>
          <div className="field">
            <div className="control">
              <input
                placeholder="Título"
                type="text"
                name="title"
                autoComplete="off"
                className="input"
                onChange={formik.handleChange}
                value={formik.values.title}
                />
              </div>
            </div>
            <div className="field">
              <div className="control">
                <div>
                  <ReactQuill theme="snow" value={description} onChange={setDescription}/>
                </div>
              </div>
            </div>
            <div className="control">
              <button
                className={"button is-primary"}
                type="submit"
              >
                Publicar
              </button>
            </div>
          </form>
        </Box>
      </div>
  );
}
