// Bootstrap imports
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import ListGroup from "react-bootstrap/ListGroup";

import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function ProductsList() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Container fluid className="containerList">
        <Row>
          <Col>
            <ListGroup variant="flush" className="lgProducts">
              <ListGroup.Item>Apple</ListGroup.Item>
              <ListGroup.Item>Greek Yoghurt - Strawberry</ListGroup.Item>
              <ListGroup.Item>Whey Delicious XXL - Chocolade</ListGroup.Item>
            </ListGroup>
          </Col>
          <Col>
            <ListGroup variant="flush">
              <ListGroup.Item>52,1 Calories</ListGroup.Item>
              <ListGroup.Item>125 Calories</ListGroup.Item>
              <ListGroup.Item>120 Calories</ListGroup.Item>
            </ListGroup>
          </Col>
          <Col>
            <ListGroup variant="flush">
              <ListGroup.Item>100 gram</ListGroup.Item>
              <ListGroup.Item>150 gram</ListGroup.Item>
              <ListGroup.Item>120 gram</ListGroup.Item>
            </ListGroup>
          </Col>
          <Col></Col>
          <Col>
            <Button className="buttonAdd" variant="warning" onClick={handleShow}>
              Add product
            </Button>
            {/* Modal for button add product */}
            <Modal show={show} onHide={handleClose}>
              <Modal.Header>
                <Modal.Title>Add product(s)</Modal.Title>
              </Modal.Header>
              <Modal.Body>
              Add product to diary
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="warning" onClick={handleClose}>
                  Add product
                </Button>
              </Modal.Footer>
            </Modal>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ProductsList;
