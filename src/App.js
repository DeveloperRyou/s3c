import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import {data} from './data/components_data.js';
import Navhead from './nav/Navhead';
import Footer from './components/Footer';
import Main_Image from './components/Main_Image';
import Buy from './components/Buy';
import Content from './components/Content';
import Content_Single from './components/Content_Single';
import Roadmap from './components/Roadmap';

function App() {
  return (
  <div className="App">
    <Navhead />
    <Container>
      <Main_Image />
      <Content data={data.introduce}/>
      <Buy />
      <Content data={data.story}/>
      <hr/>
	    <Content_Single data={data.plan}/>
      <Roadmap data={data.roadmap}/>
      <hr/>
      <Content data={data.team}/>
      <hr/>
      <Content_Single data={data.partner}/>
    </Container>
    <Footer />
  </div>
  );
}


export default App;
