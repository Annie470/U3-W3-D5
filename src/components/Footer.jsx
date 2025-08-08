import { Container, Row, Col } from "react-bootstrap"

const Footer =()=> {
    return(
    <Container fluid className="bg-dark mt-4">
        <Row>
            <Col xs={12} className="pt-2">
            <p className="text-light">Italia <span className="text-dark-emphasis">| English (UK) </span></p>
            <p className="text-dark-emphasis">Copyright &copy; 2024 <span className="text-light">Apple Inc.</span> Tutti i diritti riservati.</p>
            <p className="text-light">Codizioni dei servizi internet | Apple Music e privacy | Avviso sui cookie | Supporto | Feedback</p>
            {/* DOVEVANO ESSERE TUTTI LINK... BUT NO TIME */}
            </Col>
        </Row>
         </Container>
    )
}
export default Footer