// React imports
import React, { useEffect, useState } from "react";

// Bootstrap imports
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

// API imports
import List from "../components/List";
import withListLoading from "../components/withListLoading";

function ProductsList() {
  // Testing list with API data
  const ListLoading = withListLoading(List);
  const [appState, setAppState] = useState({
    loading: false,
    repos: null,
  });

  useEffect(() => {
    setAppState({ loading: true });
    const apiUrl = "https://6346b06d9eb7f8c0f882be14.mockapi.io/products";
    // `https://api.github.com/users/hacktivist123/repos`;
    fetch(apiUrl)
      .then((res) => res.json())
      // products was repos
      .then((products) => {
        // products was repos
        setAppState({ loading: false, products: products });
      });
  }, [setAppState]);

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
          <Col>
          <ListGroup variant="flush">
              <ListGroup.Item>...</ListGroup.Item>
              <ListGroup.Item>...</ListGroup.Item>
              <ListGroup.Item>...
                
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col>
            <Button
              className="buttonAdd"
              variant="warning"
              onClick={handleShow}
            >
              Add product
            </Button>
            {/* Modal for button add product */}
            <Modal show={show} onHide={handleClose}>
              <Modal.Header>
                <Modal.Title>Add product(s)</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <ListLoading isLoading={appState.loading} repos={appState.products} />
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
