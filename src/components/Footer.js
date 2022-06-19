import { Col, Container, Row, Image } from 'react-bootstrap';
import './Components.css';

function Footer() {
  return (
    <footer>
      <Container fluid className='footer-line'>
        <hr/>
        <Row className='mx-0 py-3'>
          <Col>
          </Col>
          <Col>
            <Image fluid src='/favicon.png' className='footer-logo'></Image>
          </Col>
          <Col>
          </Col>
        </Row>
      </Container>
      <Container fluid className="m-0 p-0">
        <span class="footer-lastline"></span>
      </Container>
    </footer>
  );
}

export default Footer;
