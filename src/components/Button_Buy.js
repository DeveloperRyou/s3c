import { Row, Col } from 'react-bootstrap';
import './Button_Buy.css';

function Button_Buy() {
  return (
    <Row className="buy gc3-bg mb-5 p-4" >
      <Col lg={3} xs={12} className="text-center mb-2 m-lg-auto">
        <h3 className="fw-bold">BUY AN SC3</h3>
      </Col>
      <Col lg={{span:4, offset:1}} xs={12} className="mb-2 m-lg-auto">
        <p className="common-p mb-lg-0">
          To get your STUPID CAT CHARITY CLUB, check out the collection on OpenSea.
        </p>
      </Col>
      <Col lg={{span:3, offset:1}} xs={12} className="m-auto text-center">
        <a href="https://opensea.io/collection/dominant-cat-charity-club" target='_blank'>
          <button className="gc3-button-dark" type="button">BUY AN SC3 ON OPENSEA</button>
        </a>
      </Col>
    </Row>
  );
}

export default Button_Buy;
