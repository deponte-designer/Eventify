import React from 'react';
import { Modal } from 'react-bootstrap';

const ModalComponentError = ({ show, toggleModal }) => {
  return (
    <Modal show={show} onHide={toggleModal}>
      <Modal.Header closeButton>
        <Modal.Title>Error</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Sorry, we could not find that artist. Please try again.
      </Modal.Body>
    </Modal>
  );
};

const ModalComponentTypo = ({ show, toggleTypoModal, artistName}) => {
  return (
    <Modal show={show} onHide={toggleTypoModal}>
      <Modal.Header closeButton>
        <Modal.Title>Error</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {`Sorry, we could not find ${artistName}. Did you mean this artist instead?`}
      </Modal.Body>
    </Modal>
  );
};

export {ModalComponentError, ModalComponentTypo};