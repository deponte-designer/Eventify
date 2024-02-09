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

// const ModalComponentTypo = ({ show, toggleModal, assumedArtist }) => {
//   return (
//     <Modal show={show} onHide={toggleModal}>
//       <Modal.Header closeButton>
//         <Modal.Title>Error</Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         {`Sorry, we could not find ${assumedArtist}. Instead, here are results for ${assumedArtist}.`}
//       </Modal.Body>
//     </Modal>
//   );
// };

export default ModalComponentError;