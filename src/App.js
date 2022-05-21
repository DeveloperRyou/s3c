import './App.css';
import Nav from './nav/Nav';
import Main_Image from './components/Main_Image';
import Content_Image from './components/Content_Image';
import Footer from './components/Footer';
import {data} from './data/components_data.js';

function App() {
  return (
  <div className="App">
    <Nav />
    <div className='common-container'>
      <div className='mb-4 mb-lg-5 container'>
        <Main_Image />
      </div>
      <div className='px-4 mt-md-4 container'>
        <Content_Image data={data.introduce} />
        <Content_Image data={data.team} />
      </div>
    </div>
    <Footer />
  </div>
  );
}

export default App;
