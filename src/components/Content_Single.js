import './Components.css';
import { Row } from 'react-bootstrap';

function Content_Single(props) {
  return (
    <Row className={props.data.className+" mb-5"} >
      <h1 className='d-flex fw-bold mb-3' dangerouslySetInnerHTML={{__html: props.data.title}} ></h1>
      <div className='content_en' dangerouslySetInnerHTML={{__html: props.data.content_en}}></div>
      <div className='content_kr d-none' dangerouslySetInnerHTML={{__html: props.data.content_kr}}></div>
    </Row>
  );
}

export default Content_Single;
