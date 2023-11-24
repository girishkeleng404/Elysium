import React from 'react'
import styled from 'styled-components'

import Fade from 'react-reveal/Fade';



function Interior() {
    return (
        <MainD className='interior'> 
        <Div>
            <Fade bottom>
            <Div1  >
                <img src='../img/intLogo.png'alt=''/>

                <h1>Interior</h1>
            </Div1> </Fade>
            <Div2>
                <Img1> </Img1>
                <Img2> </Img2>
                {/* <img src='../img/inte.jpg' alt=''/> */}
                {/* <img src='../img/inte2.jpg' alt=''/> */}
            </Div2>

            
           
        </Div>
        <Div3> <img src='../img/img11.jpg' alt=''/></Div3>
        </MainD>
    )
}
const MainD = styled.div`
height:270vh;
margin-bottom:50px;
margin-top:100px;

@media (max-width: 768px) {
    align-items:center;
    height:200vh;

  }


`

const Div = styled.div`
height:150vh;
// background-color:gray;
margin-top:2rem;
display: flex;
flex-direction: column;
align-items: center;

// img{
//     width:100vw;
//     position: relative;
//     top:100;
// }

@media (max-width: 768px) {
    align-items:center;
    height:100vh;

  }

  @media (max-width: 468px){

  }

  
`

const Div1 = styled.div`
display:flex;
justify-content:flex-start;
align-items:center;

img{
    height:70px;
    margin-right:2rem;
    
    
}
h1{
    font-size:5rem;
   
}

@media (max-width: 768px) {
    margin:auto;

    // background-image: url(../img/interiorPhone.jpg);
    img{
       heigh:30px;
       
    }
    h1{
        font-size:2rem;
    }

  }


  @media (max-width: 468px){

  }

`




const Div2 = styled.div`
width:85vw;
height:115vh;
z-index:10;
overflow:visible;



h1{
    margin:0 20px;
    font-size:5rem;
}


 @media (max-width: 768px) {
    
  
  }
  @media (max-width: 768px) {
    width:80vw;
    // overflow-x:hidden;
    margin:auto;
  }

`
const Img1 =styled.div`
background-image: url(../img/inte.jpg);
height:95vh;
background-size: cover;
background-repeat: no-repeat;
margin-bottom:20px;
box-shadow: 0 0 20px 0px rgb(0,0,0,0.4);

@media (max-width: 768px) {
height:69vh;
    
  }

`
const Img2 =styled.div`
background-image: url(../img/inte2.jpg);
height:95vh;
background-size: cover;
background-repeat: no-repeat;
box-shadow: 0 0 20px 0px rgb(0,0,0,0.4);



  -webkit-backdrop-filter: blur(15px);
  backdrop-filter: blur(15px);

@media (max-width: 768px) {
    height:69vh;
        
      }

`

const Div3 = styled.div`

z-index:1;
height:90vh;
// overflow-x:hidden;

img{
    image-size:cover;
    height:90vh;
    width:100vw;
    filter: blur(8px);
  -webkit-filter: blur(6px);
}
`
export default Interior