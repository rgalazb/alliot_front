import React, { useState } from 'react'
import { useFormik } from "formik";
import ReactQuill from 'react-quill';
import { Container, Column, Columns, Box } from './index'
import * as Yup from "yup";

export default function() {

  const [description, setDescription] = useState('');


  const formik = useFormik({
    initialValues: {
      title: '',
    },
    validationSchema: Yup.object().shape({
      title: Yup.string()
        .min(1, "Must have 1 min character")
        .max(50)
        .required("can't be empty"),
    }),
    onSubmit: (values, { resetForm }) => {
      setDescription('');
      resetForm();
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
