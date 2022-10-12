import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import ProgressBar from "react-bootstrap/ProgressBar";

function ProgressBarMain() {
  return (
    <Container fluid className="containerProgress">
      <Row>
        <Col className="colProgress">
          <p>
            You have eaten <strong>1250</strong> calories out of{" "}
            <strong>2500</strong> today
          </p>
          <ProgressBar variant="warning" animated now={50} />
        </Col>
      </Row>
    </Container>
  );
}

export default ProgressBarMain;
