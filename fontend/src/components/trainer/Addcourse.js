import React from "react";
import "../../stylesheet/Register.css";
import { Formik } from "formik";
import app_config from "../../config";
import Swal from "sweetalert2";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { styled } from "@mui/material/styles";
export default function Addcourse() {
  const url = app_config.api_url;
  const Input = styled("input")({
    display: "none",
  });
  const AddCourseForm = {
    title: "",
    duration: "",
    pricing: "",
    trainer: "",
    description: "",
  };

  const submitTrainer = (formdata) => {
    console.log(formdata);

    fetch(url + "/course/add", {
      method: "POST",
      body: JSON.stringify(formdata),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        Swal.fire({
          icon: "success",
          title: "success",
          text: "Course Added Successfully",
        });
      });
  };

  return (
    <div>
      <div class="login-box1">
        <h2>Add Course</h2>

        <Formik initialValues={AddCourseForm} onSubmit={submitTrainer}>
          {({ values, handleChange, handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <div class="user-box">
                <input
                  type="text"
                  id="title"
                  value={values.title}
                  onChange={handleChange}
                />
                <label>Title</label>
              </div>

              <div class="user-box">
                <input
                  type="text"
                  id="duration"
                  value={values.duration}
                  onChange={handleChange}
                />
                <label>Duration</label>
              </div>
              <div class="user-box">
                <input
                  type="number"
                  id="pricing"
                  value={values.pricing}
                  onChange={handleChange}
                />
                <label>Priceing</label>
              </div>
              <div class="user-box">
                <input
                  type="text"
                  id="trainer"
                  value={values.trainer}
                  onChange={handleChange}
                />
                <label>Trainer</label>
              </div>

              <div class="user-box">
                <input
                  type="text"
                  id="description"
                  value={values.description}
                  onChange={handleChange}
                />
                <label>Description</label>
              </div>
              <label htmlFor="contained-button-file">
                <Input
                  accept="image/*"
                  id="contained-button-file"
                  multiple
                  type="file"
                />
                <Button variant="contained" component="span">
                  Upload
                </Button>
              </label>
              <label htmlFor="icon-button-file">
                <Input accept="image/*" id="icon-button-file" type="file" />
                <IconButton
                  color="primary"
                  aria-label="upload picture"
                  component="span"
                >
                  <PhotoCamera />
                </IconButton>
              </label>
              <br />
              <br />
              <Button variant="contained" type="submit">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Submit
              </Button>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
}
