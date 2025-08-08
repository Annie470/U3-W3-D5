import { Button, Col, Row, Form, Container } from "react-bootstrap";
import {
  PlayFill,
  SkipStartFill,
  SkipEndFill,
  ArrowRepeat,
  Shuffle,
  VolumeUpFill,
  PersonFill,
} from "react-bootstrap-icons";

const Player = () => {
  return (
    <Container fluid>
      <Row>
        <Col lg={3}>
          <Button className="bg-transparent border-0 text-dark-emphasis">
            <Shuffle />
          </Button>
          <Button className="bg-transparent border-0 text-dark-emphasis">
            <SkipStartFill />
          </Button>
          <Button className="bg-transparent border-0 text-dark-emphasis">
            <PlayFill />
          </Button>
          <Button className="bg-transparent border-0 text-dark-emphasis">
            <SkipEndFill />
          </Button>
          <Button className="bg-transparent border-0 text-dark-emphasis">
            <ArrowRepeat />
          </Button>
        </Col>

        <Col lg={4} className="text-center bg-dark me-3 py-1">
          <img
            src="public/apple.svg"
            alt="logo"
            style={{ filter: "invert(1)" }}
          />
        </Col>

      <Col lg={2} className="d-flex align-items-center">
          <VolumeUpFill className="me-2 text-light" />
          <Form.Range  />
        </Col>


        <Col lg={2} className="text-end">
        <Button variant="danger">
            <PersonFill className="me-1" /> Accedi
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Player;
