import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
    const year = new Date().getFullYear();
    return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center py-3">
            <p>&copy; {year} ProShop</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;