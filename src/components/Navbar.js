// import React from 'react'
import React, { useState } from 'react';
import styled from 'styled-components'
import AppleIcon from '@mui/icons-material/Apple';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import {Link, Route, Routes} from 'react-router-dom';

function Navbar() {
  const [burgerStatus, setBurgerStatus] = useState(false);

  return (
    <Mm> 
    <DivM className='navbar'> 
    <Div1>

     {/* <N_l  style={{ color: 'white' }} /> */}
      
     <N_l> 
      <img src='../img/LogoFinal.png' alt='' />   </N_l>
     
     
     <N_r>
       <ul>
        <li href="Home.js" >Home</li>
       
        <li>Trainers</li>
        {/* <li>schedule</li> */}
        <li>Blog</li>
        <li>Testimonials</li>
        <li href="#Footer" >Contact</li>
       </ul>
         
     </N_r>



 <RightMenu>
        
       
    
    
       <CustomMenu onClick={()=>setBurgerStatus(true)} style={{color:"white"}} />

     </RightMenu>

    </Div1>




   
     <BurgerNav show ={burgerStatus} >
        <CloseWrapper> 

        <CustomClose onClick={()=>setBurgerStatus(false)} />
        
        </CloseWrapper>
        <li className="sign-in" >
          <a href="">Traners</a>
        </li>
        <li className="login">
          <a  href="#Address.js">Blog</a>
        </li>
        <li>
          <a href="">Testimonials</a>
        </li>

        <li>
          <a href="">Conatact</a>
        </li>
        <iframe
src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3580.338568377489!2d91.76045217545878!3d26.18566249095693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375a5995442504e1%3A0x4eaca683acf1e07f!2sELYSIUM%3A%20Unisex%20GYM%20%7C%20FITNESS%20STUDIO!5e0!3m2!1sen!2sin!4v1694703030728!5m2!1sen!2sin"
title='Map'
width="600"
height="400"

style={{ border: '0' }}
allowfullscreen=""
loading="lazy"
referrerpolicy="no-referrer-when-downgrade"
></iframe>
        {/* <li>
          <a href="">Community</a>
        </li>
        <li>
          <a href="">Contact</a>
        </li>

        <li>
          <a href="">About</a>
        </li> */}
      </BurgerNav>

    </DivM>
    </Mm>
  )
}

const Mm = styled.div`

position:sticky;
top:0;
z-index:100;
`

const DivM = styled.div`

position:stick;
top: 0;
z-index:100;

`

const Div1 = styled.div`

width:100vw;
// background-color:	#202020;
background-color:black;
height:50px;
display:flex;
justify-content:space-around;
align-items:center;

@media (max-width: 768px) {
   justify-content:space-around;
  }

`
// const N_l = styled(AppleIcon)`
// cursor:pointer;

// `
const N_l = styled.div`
cursor:pointer;
img{
  width:100px;
}

`
const N_r = styled.div`
color:white;
display:flex;
flex:1;
align-items:center;
justify-content:center;
z-index:100;
ul{
    display:flex;
    flex-wrap:wrap;
}
ul li{
    list-style: none;
    padding:0 17px;
    cursor:pointer;
}
@media (max-width: 768px) {
  display: none;
}

`

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  color: white;
   

  a {
    font-weight: 550;
    text-decoration: uppercase;
    margin-right: 10px;
    flex-wrap: nowrap;
    color: white;
  }
  z-index:2;

`;

const BurgerNav = styled.div`
position:fixed;
top: 0;
bottom: 0;
right: 0;
// background: linear-gradient(180deg, #7398a5, #7ad7d2);
background:rgb(0,0,0,0.6);
// background:white;
color: white;

width:80%;
height:600px;
z-index:10;
padding:20px;
display:flex;
flex-direction:column;
// justify-content:flex-start;
align-items:flex-start;
transform: ${props => props.show ? 'TranslateX(0)': 'TranslateX(100%)'};
transition: all 300ms ease-in-out;
// opacity:0.9;
-webkit-backdrop-filter: blur(15px);
  backdrop-filter: blur(15px);


li
{
  list-style: none;
  padding: 15px 0;
  border-bottom: 1px solid;
} a{
  text-decoration:none;
  list-style:none;
  // color:Black;
  color:white;
}
//  .sign-in {
//   background-color: lightgray;
//   border-radius:10px;
//   padding:10px;
//   min-width:80px;
//   margin-bottom:10px;
//  }
//  .login {
//   background-color: lightblue;
//   border-radius:10px;
//   padding:10px;
//   min-width:80px;

//  }

`;

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
visibility: hidden;

@media (max-width: 768px) {
 visibility: visible;
 z-index:100;
}

`;

const CloseWrapper =styled.div`
display:flex;
justify-content:flex-end;
width:100%;
`
const CustomClose = styled(CloseIcon)`
cursor: pointer;
`


export default Navbar