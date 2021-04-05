import React from "react";
import { Modal, ModalBody, ModalTitle } from "react-bootstrap";
import ModalHeader from "react-bootstrap/esm/ModalHeader";

const EModel = (props) => {
  return (
    <>
      <Modal show={props.show} onHide={props.onHide} size={props.size}>
        <ModalHeader closeButton>
          <ModalTitle>{props.title}</ModalTitle>
        </ModalHeader>
        <ModalBody>
          <p>{props.body}</p>
        </ModalBody>
      </Modal>
    </>
  );
};

export default EModel;
