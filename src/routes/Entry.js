import React from 'react';
import "./Routes.css";
import { Row, Col } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Footer from '../components/Footer';
import Entry_Image from '../components/image/Entry_Image';
import Button_Entry from '../components/Button_Entry';
import NavEntry from '../nav/NavEntry';

function Entry() {
  return (
    <Container fluid className='entry px-0'>
      <NavEntry />
      <Container className='content mb-4'>
        <Row>
          <Col lg={12}>
            <Entry_Image />
          </Col>
          <Col lg={5} md={12} className="welcome mt-lg-0 py-4">
            <Button_Entry />
          </Col>
        </Row>
        <hr/>
        <Row>
          <Col>
            <p className='common-p'>
              <b>Great Cat Charity Club</b> (GC3) is a <font className="fw-bold text-warning">[new charity]</font> based on the latest trend issue, NFT.
            </p>
            <p className='common-p'>
              <b>GC3</b> will create an appropriate <font className="fw-bold text-warning">[metaverse from universe]</font> that conveys its own values.
            </p>
          </Col>
        </Row>
      </Container>
      <Footer />
    </Container>
  );
}


export default Entry;
