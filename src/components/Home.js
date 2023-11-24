import React from 'react'
import styeled from 'styled-components'
import Hero from './Hero'
import Navbar from './Navbar'

// import Interior from './Interior'
import Equipment from './Equipment'

import ReviewS from './ReviewS'
import Footer from './Footer'
import FandA from './FandA'
import {  Route, Routes} from 'react-router-dom';

function Home() {
  return (
    <Container> 
         <Navbar/>

        <Hero />
        
        {/* <Interior/> */}
        <Equipment/>
       
        <FandA/>
        <ReviewS/>
        <Footer/>
       

    </Container>
  )
}
// import { Form } from 'react-router-dom'


const Container= styeled.div`
width:100vw;
overflow:hidden;

scroll-behavior: lazy;

`

export default Home