
import React from 'react'
import { styled } from 'styled-components'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Fade from 'react-reveal/Fade';



function Hero() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  };

  return (

    <>
      {/* <Div1>  <h1>Wellcome to <br/> Elysium</h1></Div1> */}

      <Carousel {...settings}>

        <Wrap>

          <Div2 className='Hero'>

            <Fade bottom>
              <h1>Welcome to </h1>
              <img src='../img/LogoFinal1.png' alt='' />
            </Fade>



          </Div2>

        </Wrap>
        <Wrap>

          <Div4 className='Hero'>


            <h1>Wellcome to </h1>
            <img src='../img/LogoFinal1.png' alt='' />




          </Div4>

        </Wrap>
        <Wrap>

          <Div31 className='Hero'>


            <h1>Wellcome to </h1>
            <img src='../img/LogoFinal1.png' alt='' />




          </Div31>

        </Wrap>
        {/* <Wrap>

          <Div3 className='bmi'>


            <h1>Curiosity About Your BMI ? </h1>





          </Div3>

        </Wrap> */}


      </Carousel>
    </>
  )
}




const Carousel = styled(Slider)`
 width:100vw;
margin: auto;
// margin-top:20px;

.slick-list{
  
}


.slick-next {
  right: 25px; 
}
.slick-prev {
  right: 25px; 
}

 button{
  z-index:50;
 }
`
const Wrap = styled.div`
// height:66vh;
overflow:hidden;



`;



const Div2 = styled.div`
width:100vw;
height:95vh;
background-image: url(../img/img11.jpg);
background-repeat: no-repeat;
background-size:cover;
display:flex;

justify-content: center;
align-items: flex-start;
overflow-y: hidden;
flex-direction:column;




img{
  
   width:35vh; 
  margin-left:4rem;
  box-shadow: rgb(0 0 0 /69%) 0px 26px 30px -10px,
  rgb(0 0 0 /73%) 0px 16px 10px -10px;

   
}

h1{
  color:white;
  font-size:5rem;
  margin-left:4rem;
}



@media (max-width: 768px) {

background-image: url(../img/heroPhone.jpg);
overflow:hidden;

  justify-content: center;

  h1{
    font-size:2rem;
    margin-left:2rem;
  }
  img{
    width:40vh;
  }
}


  @media (max-width: 468px){
 justify-content: center;
 align-items: flex-start;

  h1{
    font-size:1.9rem;
    margin-left:1rem;
  }
  img{
    width:35vh;
    margin-left:1rem;
  }
  }

`
// const Div3 = styled(Div2)`
// // align-items: flex-start;

// justify-content: flex-start;
// background-image: url(../img/bmiPc.jpg);
// h1{
//   color:black;
//   margin-top:5rem;
// }

// `
const Div4 = styled(Div2)`
background-image: url(../img/equip1.jpg);

h1{
  color:black;
  
}
`
const Div31 = styled(Div2)`
background-image: url(../img/inte3.jpg);

`






export default Hero