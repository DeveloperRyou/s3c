import Introduce from './image/Introduce';
import Story from './image/Story';
import Vipcard from './image/Vipcard';
import Team from './image/Team';

function Content_Image(props) {
  let img;
  if (props.data.className === "introduce"){
    img = <Introduce />
  }
  else if (props.data.className === "story"){
    img = <Story />
  }
  else if (props.data.className === "roadmap"){
    img = <Vipcard />
  }
  else if (props.data.className === "team"){
    img = <Team />
  }
  else if (props.data.className === "partner"){
    img = <Introduce />
  }
  return (
    <div className='my-lg-auto col-lg-4 col-12 offset-lg-1'>
      {img}
    </div>
  );
}

export default Content_Image;
