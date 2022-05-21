import './App.css';
import Nav from './nav/Nav';
import Main_Image from './components/Main_Image';
import Content_Image from './components/Content_Image';
import Footer from './components/Footer';

function App() {
  return (
  <div className="App">
    <Nav />
    <div className='common-container'>
      <div className='mb-4 mb-lg-5 container'>
        <Main_Image />
      </div>
      <div className='px-4 mt-md-4 container'>
        <Content_Image />
        <Content_Image />
      </div>
    </div>
    <Footer />
  </div>
  );
}

export default App;
