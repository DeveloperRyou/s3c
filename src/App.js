import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './nav/Nav';
import Main_Image from './components/Main_Image';
import Content_Image from './components/Content_Image';
import Buy from './components/Buy';
import Footer from './components/Footer';
import {data} from './data/components_data.js';

function App() {
  return (
  <div className="App">
    <Nav />
    <div className='common-container'>
      <Main_Image />
      <div className='px-4 mt-md-4 container'>
        <Content_Image data={data.introduce} />
        <Buy />
        <Content_Image data={data.team}/>
      </div>
    </div>
    <Footer />
  </div>
  );
}


export default App;
