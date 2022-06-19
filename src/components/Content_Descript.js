import './Components.css';
import { Col } from 'react-bootstrap';

function Content_Descript(props) {
  return (
	  <Col lg={7} md={12}>
      <h1 className='d-flex fw-bold mb-3' dangerouslySetInnerHTML={{__html: props.data.title}} ></h1>
      <div className='content_en' dangerouslySetInnerHTML={{__html: props.data.content_en}}></div>
      <div className='content_kr d-none' dangerouslySetInnerHTML={{__html: props.data.content_kr}}></div>
    </Col>
  );
}

export default Content_Descript;
