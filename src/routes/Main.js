import React from 'react';
import Container from 'react-bootstrap/Container';
import {data} from '../data/components_data.js';
import Main_Image from '../components/image/Main_Image';
import Content from '../components/Content';
import Content_Single from '../components/Content_Single';
import Button_Buy from '../components/Button_Buy';
import Roadmap from '../components/Roadmap';
import Footer from '../components/Footer';
import NavMain from '../nav/NavMain';

function Main() {
  return (
    <Container fluid className='main px-0'>
      <NavMain />
      <Container className='undernav'>
        <Main_Image />
        <Content data={data.introduce}/>
        <Button_Buy />
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
    </Container>
  );
}


export default Main;
