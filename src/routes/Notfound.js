import React from 'react';
import "./Routes.css";
import { Container, Row, Col } from 'react-bootstrap';
import Footer from '../components/Footer';
import NavMain from '../nav/NavMain';

function Notfound() {
	return (
		<Container fluid className='notfound px-0'>
		  <NavMain />
      <Row className='vh-100 align-content-between'>
        <Col xs={12} className='h-50 d-flex undernav text-center'>
          <div className='m-auto'>
            <div className='display-1 fw-bold'>404</div>
            <div className='display-2'>Not Found</div>
          </div>
        </Col>
        <Col xs={12}>
          <Footer />
        </Col>
      </Row>
		</Container>
	);
}
  
export default Notfound;
  