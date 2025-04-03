import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../assets/styles/modal.scss";
import { Formik, Field, Form } from "formik";
import { CloseIcon } from "./SvgComponent";
import { sendClientRequest } from "../../redux/actions";

const Modal = ({ active, SetModalActive }) => {
  const dispatch = useDispatch();

  // Функція для збору даних з форми
  const handleSubmit = (e) => {
    e.preventDefault();

    // Тут можна відправити formData на сервер або обробити його іншим чином
  };

  return (
    <>
      <div className={active ? "modal active" : "modal"}>
        <div
          className={
            active
              ? "modal__backdrop modal__backdrop-active"
              : "modal__backdrop"
          }
          onClick={() => SetModalActive(false)}
        ></div>
        <div
          className={
            active
              ? "modal__container modal__container-active"
              : "modal__container"
          }
        >
          <button
            className="modal__close-button"
            onClick={() => SetModalActive(false)}
          >
            <CloseIcon />
          </button>
          <h2 className="modal__title">Залиште заявку, щоб дізнатися умови</h2>
          <div className="modal__container-sub">
            <Formik
              initialValues={{
                name: "",
                email: "",
                phone: "",
              }}
              onSubmit={async (values) => {
                dispatch(sendClientRequest(values));
              }}
            >
              <Form className="modal__form">
                <label htmlFor="name" />
                <Field
                  id="name"
                  name="name"
                  placeholder="Ім'я"
                  className="modal__input"
                />

                <label htmlFor="email" />
                <Field
                  id="email"
                  name="email"
                  placeholder="Email"
                  className="modal__input"
                />

                <label htmlFor="phone" />
                <Field
                  id="phone"
                  name="phone"
                  placeholder="Номер телефону"
                  type="phone"
                  className="modal__input"
                />
                <button
                  type="submit"
                  className="modal__submit-button"
                  onClick={() => SetModalActive(false)}
                >
                  <span className="modal__submit-text">Залишити заявку</span>
                </button>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
<Formik
  initialValues={{
    name: "",
    email: "",
    phone: "",
  }}
  onSubmit={async (values) => {
    await new Promise((r) => setTimeout(r, 500));
    alert(JSON.stringify(values, null, 2));
  }}
>
  <Form className="modal__form">
    <label htmlFor="name" />
    <Field id="name" name="name" placeholder="Ім'я" className="modal__input" />

    <label htmlFor="email" />
    <Field
      id="email"
      name="email"
      placeholder="Email"
      className="modal__input"
    />

    <label htmlFor="phone" />
    <Field
      id="phone"
      name="phone"
      placeholder="Номер телефону"
      type="phone"
      className="modal__input"
    />
    <button type="submit" className="modal__submit-button">
      <span className="modal__submit-text">Залишити заявку</span>
    </button>
  </Form>
</Formik>;
