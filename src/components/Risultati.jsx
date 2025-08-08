import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Container, Row, Col, Spinner, Alert } from "react-bootstrap";

const Risultati = () => {
  const query = useSelector((state) => state.search.value); 
  const [albums, setAlbums] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (!query) return;

    setIsLoading(true);
    setIsError(false);

    fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${query}`)
      .then((res) => {
        if (res.ok) return res.json();
        else throw new Error("Errore nel recupero degli album.");
      })
      .then((data) => {
        setAlbums(data.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsError(true);
        setIsLoading(false);
      });
  }, [query]);

  return (
    <Container className=" bg-dark" fluid>
      {!isLoading && !isError && albums.length > 0 && (
        <h3 className="text-light mb-4">
          {query}
        </h3>
      )}

      <Row>
        {isLoading && (
          <Col className="text-center">
            <Spinner animation="border" variant="light" />
          </Col>
        )}

        {isError && (
          <Col>
            <Alert variant="danger" className="text-center">
              Errore recupero degli album.
            </Alert>
          </Col>
        )}

        {!isLoading && !isError && albums.length === 0 && (
          <Col>
            <Alert variant="warning" className="text-center">
              Nessun risultato trovato per "{query}"
            </Alert>
          </Col>
        )}

        {!isLoading &&
          !isError &&
          albums.map((album) => (
            <Col xs={12} md={6} lg={4} className="p-3" key={album.id}>
              <img
                src={album.album.cover_medium}
                alt={`Copertina di ${album.album.title}`}
                className="img-fluid rounded"
              />
              <h5 className="mt-2 text-light">{album.album.title}</h5>
              <p className="text-light">{album.artist.name}</p>
            </Col>
          ))}
      </Row>
    </Container>
  );
};

export default Risultati;
