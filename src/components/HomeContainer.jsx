import {Container, Row, Col} from 'react-bootstrap'
import SideBar from './SideBar'
import MainPage from './MainPage'
import Footer from './Footer'

const HomeContainer =()=> {
    return(
        <>
        <Container fluid className='bg-black'>
            <Row>
               <Col xs={12} md={12} lg={2} className="p-3">
                    <SideBar />
                </Col>
                <Col xs={12} md={12} lg={9} className='p-3 ms-lg-5 px-lg-5'>
                    <MainPage />
                      <Footer/>
                </Col>
            </Row>
        </Container>
        </>
    )
}
export default HomeContainer