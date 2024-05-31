import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { SignIn } from "../components/form/SignIn";

export const HomePages = () => {
  return (
    <Container>
      <Row
        className="justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <Col md={6}>
          <SignIn />
        </Col>
      </Row>
    </Container>
  );
};
