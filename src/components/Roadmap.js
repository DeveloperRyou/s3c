import './Components.css';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import Content_Image from './Content_Image';

function Roadmap(props) {
  return (
    <Row className={props.data.className+" mb-5"}>
      <Col lg={7} md={12} className="content_en">
        {props.data.content_en.map((content) =>
          <Row className="mb-3">
            <Col lg={1} md={2} className="m-auto offset-lg-1 offset-1">
              <p class="common-p sc3-color h5 m-auto">{content.percent}</p>
            </Col>
            <Col lg={10} md={9} className="m-auto">
              <p class="common-p m-auto">{content.content}</p>
            </Col>
          </Row>
        )}
      </Col>
      <Col lg={7} md={12} className="content_kr d-none">
        {props.data.content_en.map((content) =>
          <Row className="mb-3">
            <Col lg={1} md={2} className="m-auto offset-lg-1 offset-1">
              <p class="common-p sc3-color h5 m-auto">{content.percent}</p>
            </Col>
            <Col lg={10} md={9} className="m-auto">
              <p class="common-p m-auto">{content.content}</p>
            </Col>
          </Row>
        )}
      </Col>
      <Content_Image data={props.data}/>
    </Row>
  );
}

export default Roadmap;
