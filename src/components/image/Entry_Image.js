import { Container } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Image } from 'react-bootstrap';

function Entry_Image() {
  return (
    <Container className='px-0'>
      <Col>
        <Image fluid src='/entry.jpeg' className='w-100'></Image>
      </Col>
    </Container>
  );
}

export default Entry_Image;
