import './Components.css';
import main_image from './main_image.jpg';

function Main_Image() {
  return (
    <div className='row'>
      <div className="px-0 col-12">
      <img src={main_image} className="img-fluid px-0"></img>
      </div>
    </div>
  );
}

export default Main_Image;
