import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';


function Equipment() {
  return (
    <DivM className='equipment'>

<Fade bottom> 
      <Div1>
        <h1>Equipments</h1>

      </Div1>
      </Fade>
      <Div2>
        <Fade top > 
        <h2>Strength:</h2>
         </Fade>
        <ul> 
          <Fade bottom cascade >
          <li>Smith Machine w/ Power-rack and
            J - hook Station</li>
          <li>Olympic Bench</li>
          <li>Adjustable Olympic Bench</li>
          <li>Preacher Bench</li>
          <li>Multi - functional Trainer</li>
          <li>Pec dec FlyStation</li>
          <li>Lat Pulldown+ Cable Row Station</li>
          <li>Linear Leg Press Station</li>
          <li>Leg Extension + Leg Curl Combo
            w/ Hydraulic Adjustment</li>
          <li>Total Dumbells Weight :</li>
          <li>Total Plates Weight : 400 + kilos </li>
</Fade>
        </ul>
      </Div2>
      <Div3M> 
      <Div3> 
       <h1>Cardio Equipments</h1>
       <ul>
        <li>Motorized Treadmill Station</li>
        <li>Stationary Spin Bike</li>
       </ul>

      </Div3>

     <Brand>
     <h1>Equipment Brands:</h1>
     <Img> 
     <Fade left> 
     <Imgs1> <img src='../img/111.jpg' alt='' /></Imgs1>
     </Fade> 
     <Fade buttom>
    <Imgs2> <img src='../img/DHZ.png' alt='' /></Imgs2>
    </Fade>
    <Fade right>
    <Imgs3>  <img src='../img/Blogo.jpeg' alt='' /></Imgs3>
    </Fade>
     </Img>
     </Brand>

      </Div3M>
    </DivM>
  )
}
const DivM = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
// height:80vh;
// background-color:#8888;
// margin-bottom:50px;
padding-top:100px;
// background: rgb(237,210,255);
// background: linear-gradient(143deg, rgba(237,210,255,1) 0%, rgba(249,249,249,1) 50%, rgba(255,255,255,1) 100%); 



`
const Div1 = styled.div`

`
const Div2 = styled.div`
margin:30px;
padding:20px 10px;
min-width:50vw;
max-width:50vw;
 background-color: #202020;
 color: #fff;
 border-radius:10px;
 box-shadow: 0 0 20px 0px rgb(0,0,0,0.4);
 display:flex;
 flex-direction:column;
 justify-content:center;
 align-items:center;


//  background-color: rgba(0, 0, 0, 1);
//  opacity:0.5;
//  // background-color: #ffffff;
//    -webkit-backdrop-filter: blur(15px);
//    backdrop-filter: blur(15px);


ul li{
  margin:20px;
}

@media (max-width: 768px) {
    font-size:small;
    min-width:50vw;
max-width:90vw;

  }
`
const Div3M = styled.div`
background-image: url(../img/equip1.jpg);


width:100vw;
height:50vh;
background-size: cover;
display:flex;
justify-content:start;
align-items:center;
flex-direction:column;


// z-index:5;


@media (max-width: 768px) {
height:80vh;
   

  }
  @media (max-width: 1016px) {
   
height:80vh;


  }

  @media (max-height: 668px) {
   height:100vh;
 
   }

`
const Div3 = styled(Div2)`
background: rgba(0, 0, 0, 0.9);
opacity:0.8;
border: 1px solid #fff;

`
const Brand = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items:center;
color:#fff;
z-index:10;
h1{
  margin-bottom:20px;
flex-direction: raw;

@media (max-width: 768px) {
   font-size: 2em;
   text-align: center;
  //  color:black;

  }

}

@media (max-width: 768px) {
   

  }

`
const Img = styled.div`

display:flex;
flex-direction: raw;
img{
  // width:300px;
  height:70px;
  margin: 10px 30px;
  border:3px solid #fff;
  border-radius:5px;


  @media (max-width: 768px) {

    height:50px;
  margin: 10px;
  border:1px solid #fff;

  }
}
@media (max-width: 768px) {
   
flex-direction: column;
}



`
const Imgs1 = styled.div`

`
const Imgs2 = styled.div`

`
const Imgs3 = styled.div`

`

export default Equipment