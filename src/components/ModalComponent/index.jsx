import React from 'react';
import { Modal } from 'react-bootstrap';

const ModalComponentError = ({ show, toggleModal }) => {
  return (
    <Modal data-bs-theme="dark" show={show} onHide={toggleModal}>
      <Modal.Header closeButton>
        <Modal.Title>Error</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {`Sorry, we could not find that artist. Please try again.`}
      </Modal.Body>
    </Modal>
  );
};

const ModalComponentTypo = ({ show, toggleTypoModal, artistName}) => {
  return (
    <Modal data-bs-theme="dark" show={show} onHide={toggleTypoModal}>
      <Modal.Header closeButton>
        <Modal.Title>Error</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {`Sorry, we could not find ${artistName}. Did you mean this artist instead?`}
      </Modal.Body>
    </Modal>
  );
};

const ModalContact = ({ show, toggleContactModal, formError }) => {
  return (
    <Modal data-bs-theme="dark" show={show} onHide={toggleContactModal}>
      <Modal.Header closeButton>
        <Modal.Title>{formError ? 'Error' : 'Form submitted'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {formError ? 'There was an error submitting the form.' : 'Thank you!' }
      </Modal.Body>
    </Modal>
  );
};

export {ModalComponentError, ModalComponentTypo, ModalContact};