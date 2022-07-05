import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Button_Entry() {
  return (
	<Row>
	  <Col xs={2}>
		<div className="text-vertical">Please scroll</div>
	  </Col>
	  <Col className='position-relative px-0 mx-3'>
		<h2 className="common-title text-end mb-0">
		  WELCOME TO
		</h2>
		<h3 className="common-title text-end mb-2">
		  Great Cat Charity Club
		</h3>
		<Link to="/main">
		  <button className="gc3-button-light w-100 position-absolute bottom-0" type="button">
			ENTER
		  </button>
		</Link>
	  </Col>
	</Row>
  );
}

export default Button_Entry;
