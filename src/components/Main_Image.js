import './Components.css';
import { Container } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Image } from 'react-bootstrap';

function Main_Image() {
  return (
    <Container className='mb-4 mb-lg-5 px-0'>
      <Col>
        <Image fluid src='/main.jpg'></Image>
      </Col>
    </Container>
  );
}

export default Main_Image;
