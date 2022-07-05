import { Row } from 'react-bootstrap';
import Content_Descript from './Content_Descript';
import Content_Image from './Content_Image';

function Content(props) {
  return (
    <Row className={props.data.className+" mb-5"} >
      <Content_Descript data={props.data}/>
      <Content_Image data={props.data}/>
    </Row>
  );
}

export default Content;
