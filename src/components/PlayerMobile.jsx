import { Row, Col, Button } from "react-bootstrap";
import { PlayFill, SkipEndFill } from "react-bootstrap-icons";

const PlayerMobile = () => {
  return (
    <div className="d-block d-lg-none fixed-bottom  text-light py-2 px-3">
      <Row className="align-items-center bg-dark rounded py-2">
        <Col xs={6}>
          <img
            src="src/assets/images/2f.png" 
            alt="album"
            style={{ width: "50px", height: "50px", objectFit: "cover" }}
            className="rounded"
          />
        </Col>
        <Col xs={6} className="text-end">
          <Button className="bg-transparent border-0 text-light me-2">
            <PlayFill />
          </Button>
          <Button className="bg-transparent border-0 text-light">
            <SkipEndFill />
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default PlayerMobile;
