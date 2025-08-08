import { Container, Row, Col, Button, Alert } from "react-bootstrap";
import Hero from "./Hero";
import Card from "./Card";
import Label from "./Label"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToAction } from "../redux/actions/fetchAction";
import Player from "./Player";

const MainPage = () => {
  const dispatch = useDispatch();
  const { arrayAlbum } = useSelector((state) => state.album);

  useEffect(() => {
    dispatch(addToAction());
  }, [dispatch]);

  return (
    <>
      <Container fluid className="p-0">
        <Row>
          <Col xs={12} className="d-none d-lg-block">
          <Player/>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs={12} className="text-light text-start">
            <h2 className="mt-3 mt-md-5">Novità</h2>
            <hr />
          </Col>
        </Row>
        <Row className="g-2 justify-content-between align-items-start">
          <Col className="text-light justify-content-between " xs={6}>
            <Hero
              subtitle={
                "Rilassati, al resto pensiamo noi. Ascolta Apple Music Chill"
              }
              img={"src/assets/images/1a.png"}
            />
          </Col>
          <Col
            className="text-light d-flex flex-column justify-content-between "
            xs={6}>
            <Hero
              subtitle={"Ecco la nuova casa della musica latina"}
              img={"src/assets/images/1b.png"}
            />
          </Col>
        </Row>

        <Row className="g-3 justify-content-between align-items-start mt-4">
          <h3 className="text-light d-inline">
            Nuovi episodi radio{" "}
            <Button className="bg-transparent border-0"> &gt;</Button>
          </h3>
          <Col xs={3} md={2}>
            <Card
              img="src/assets/images/2a.png"
              title="Prólogo con Abuelo"
              icon={<i className="bi bi-apple-music text-light"></i>}
            />
          </Col>
          <Col xs={3} md={2}>
            <Card img="src/assets/images/2b.png" title="The Wanderer" />
          </Col>
          <Col xs={3} md={2}>
            <Card
              img="src/assets/images/2c.png"
              title="Micheal Bublè & Carly Pearce"
            />
          </Col>
          <Col xs={3} md={2} className="d-none d-md-block">
            <Card
              img="src/assets/images/2d.png"
              title="Stephan Moccio: The Zane Lowe Interview"
            />
          </Col>
          <Col xs={3} md={2} className="d-none d-md-block">
            <Card
              img="src/assets/images/2e.png"
              title="Chart Spotlight: Julia Michaels"
            />
          </Col>
        </Row>
        <Row className="g-3 justify-content-between align-items-start mt-2 ">
          <h3 className="text-light d-inline">
            Nuove uscite{" "}
            <Button className="bg-transparent border-0"> &gt;</Button>
          </h3>
       
         {arrayAlbum.length === 0 ? (
  <Col>
    <Alert variant="danger" className="text-center">
      Impossibile caricare gli album.
    </Alert>
  </Col>
) : (
  arrayAlbum.slice(0, 5).map((track) => (
    <Col xs={3} md={2} key={track.id}>
      <Card
        img={track.album.cover_medium}
        title={track.title}
        icon={""}
      />
    </Col>
  ))
)}

          
        </Row>
 <h3 className="mt-3 text-light">
            Altro da esplorare{" "}
          </h3>
        <Row className="g-2">
          <Label des={"Esplora per genere"} />
          <Label des={"Decenni"} />
          <Label des={"Attività e stati d'animo"} />
          <Label des={"Worldwide"} />
          <Label des={"Classifiche"} />
          <Label des={"Audio Spaziale"} />
          <Label des={"Video musicali"} />
          <Label des={"Nuovi artisti"} />
          <Label des={"Hit del passato"} />
          </Row>
      </Container>
    </>
  );
};
export default MainPage;
