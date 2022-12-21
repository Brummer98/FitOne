// Bootstrap imports
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";

function Footer() {
return(
    <>
    <Container fluid className="containerFooter">
        <Row>
            <Col>
                FitOne - One Fit Solution©
            </Col>
        </Row>
    </Container>
    </>
    );
}

export default Footer;
