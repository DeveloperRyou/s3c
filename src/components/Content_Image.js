import './Components.css';

function Content_Image(props) {
  return (
    <div className={props.data.className+" mb-5 row text-left"} >
      <div className='col-lg-7 col-12'>
       <h1 className='d-flex mb-3' dangerouslySetInnerHTML={{__html: props.data.title}} ></h1>
       <div dangerouslySetInnerHTML={{__html: props.data.content}}></div>
      </div>
      <div className='my-lg-auto col-lg-4 col-12 offset-lg-1'>
        <img className='img-fluid w-100' src='' alt='' onError={(e) => {e.target.src = '/alt.jpg'}}></img>
      </div>
    </div>
  );
}

export default Content_Image;
