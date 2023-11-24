import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components';
import StarIcon from '@mui/icons-material/Star';
import { style } from '@mui/system';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Flip from 'react-reveal/Flip';
import Fade from 'react-reveal/Fade';





<style>
  @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

  @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
</style>



function ReviewS() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  };
  return (

    <Div>
      <Test>
        <h1>TESTIMONIALS</h1>
        <p>Real people. Real Result</p>
      </Test>

      <Carousel {...settings} >










        <Wrap>
          <Sm>

            <ImgM>
              <img src='../img/review1.jpg' alt='' />
            </ImgM>


            <Rev>    
{/* <Flip left cascade >  */}
              <p>Recently joined and I must say I am extremely impressed with my experience so far. Firstly, the trainer at the gym is  knowledgeable, approachable and always willing to help.
                Another great aspect of this gym is the amount of space, never have to wait in line to use any equipment. The gym is well-maintained and always kept clean, with a changing room and spacious bathroom, which is a huge plus.
                The variety of equipment available is also fantastic.

                I highly recommend this gym to anyone looking for a great workout experience.</p>
{/* </Flip> */}

<ProfileStar> 
              <Profile>

                <div>  <img src='../img/review1.jpg' alt='' /></div>
                <h4>Nilopal shaikia</h4>


              </Profile>
              <Star>
              <StarN style={{fontSize:"1.2rem"}} />
                <StarN style={{fontSize:"1.2rem"}} />
                <StarN style={{fontSize:"1.2rem"}} />
                <StarN style={{fontSize:"1.2rem"}} />
                <StarN style={{fontSize:"1.2rem"}} />
                <Time>
                  <p> Two months ago</p>
                </Time>
              </Star>
              </ProfileStar>
            </Rev>
          </Sm>
        </Wrap>

        <Wrap>
          <Sm>

            <ImgM>
              <img src='../img/review2.jpg' alt='' />
            </ImgM>


            <Rev>

              <p>I just love this place, the energy and the atmosphere. The trainer is amazing and very encouraging. A special shout out to him. Everything is super clean plus modern equipments as well as great music. I'm glad to be a part of ELYSIUM team. Spending an hour or two in ELYSIUM is a joy everyday. It is a life changing gym experience and I recommend highly to anyone who wants to get in good shape and progress.</p>


<ProfileStar> 
              <Profile>

                <div> 
                   {/* <img src='../img/review1.jpg' alt='' /> */}
                   <Img style={{fontSize:"2rem"}} />
                </div>
                <h4>Bhagyashree Nath</h4>


              </Profile>
              <Star>
                <StarN style={{fontSize:"1.2rem"}} />
                <StarN style={{fontSize:"1.2rem"}} />
                <StarN style={{fontSize:"1.2rem"}} />
                <StarN style={{fontSize:"1.2rem"}} />
                <StarN style={{fontSize:"1.2rem"}} />
               
                <Time>
                  <p> Three months ago</p>
                </Time>
              </Star>
              </ProfileStar>
            </Rev>
          </Sm>
        </Wrap>

        <Wrap>
          <Sm>

            <ImgM>
              <img src='../img/review3.jpg' alt='' />
            </ImgM>


            <Rev>

              <p>I absolutely love ELYSIUM GYM! The trainer is incredibly motivating and highly experienced, the equipment is top-notch, and the atmosphere is welcoming. It's a clean and well-maintained gym that provides the perfect environment for working out and staying motivated. I highly recommend it!</p>


<ProfileStar> 
              <Profile>

                <div>  <img src='../img/review3.jpg' alt='' /></div>
                <h4>Pranamika Das</h4>


              </Profile>
              <Star>
              <StarN style={{fontSize:"1.2rem"}} />
                <StarN style={{fontSize:"1.2rem"}} />
                <StarN style={{fontSize:"1.2rem"}} />
                <StarN style={{fontSize:"1.2rem"}} />
                <StarN style={{fontSize:"1.2rem"}} />
                <Time>
                  <p> Four months ago</p>
                </Time>
              </Star>
              </ProfileStar>
            </Rev>
          </Sm>
        </Wrap>



        <Wrap>
          <Sm>

            <ImgM>
              <img src='../img/review4.jpg' alt='' />
            </ImgM>


            <Rev>

              <p>Well equipped gym...the trainer is highly motivated,very friendly and well experienced,the gym is also well maintained and very clean....students must join this gym(budget friendly).</p>


<ProfileStar> 
              <Profile>

                <div>  <img src='../img/review4.jpg' alt='' /></div>
                <h4>Rahul Das</h4>


              </Profile>
              <Star>
              <StarN style={{fontSize:"1.2rem"}} />
                <StarN style={{fontSize:"1.2rem"}} />
                <StarN style={{fontSize:"1.2rem"}} />
                <StarN style={{fontSize:"1.2rem"}} />
                <StarN style={{fontSize:"1.2rem"}} />
                <Time>
                  <p> Three months ago</p>
                </Time>
              </Star>
              </ProfileStar>
            </Rev>
          </Sm>
        </Wrap>





















      



      </Carousel>
    </Div>

  )
}

const Div = styled.div`

margin-top:70px;

background: rgb(212,171,240);
background: linear-gradient(143deg, rgba(212,171,240,1) 0%, rgba(249,249,249,1) 50%, rgba(255,255,255,1) 100%); 


margin-bottom:100px;

  @media (max-width: 1278px) {
    
background: #fff;

 }

`
const Test = styled.div`
display:flex;
flex-direction:column;
align-items:center;
color:#888;
font-family: 'Poppins', sans-serif;

`

const Carousel = styled(Slider)`
 width:50vw;
 
margin: auto;
margin-top:20px;

.slick-list{
  overflow:visible;
  
}


.slick-next {
  right: 25px; 
  color: black  !important ;
  // background-color: 	#989898;
}
.slick-prev {
  right: 25px; 
}

 button{
  z-index:50;
 }

  @media (max-width: 1278px) {
// height:200vh;
overflow:visible;
     width:100vw;

  

   }
`
const Wrap = styled.div`
height:65vh;
overflow:hidden;
width:70vw;
font-family: 'Roboto', sans-serif;

 @media (max-width: 1278px) {
  min-height:130vh;
 max-height:190vh;


  }

   @media (max-height: 668px) {
   min-height:170vh;
 max-height:190vh;

  }

img{
  // border:4px solid transparent;
  margin:auto;
  height:20vh;
 
  border-radius:4px;
  width:50%;
  image-size:cover;
  box-shadow: rgb(0 0 0 /69%) 0px 26px 30px -10px,
  rgb(0 0 0 /73%) 0px 16px 10px -10px;
}

 

`;
const Sm = styled.div`
box-shadow: rgb(0 0 0 /69%) 0px 26px 30px -10px,
  rgb(0 0 0 /50%) 1px 10px 10px -10px;
  margin:50px;
  border-radius:4px;
  // padding:20px;
  min-height:484px;
  transition-duration: 600ms;
  display:flex;
  // width:100vw;



background-color: rgba(255, 255, 255, 0.4);
// background-color: #ffffff;
  -webkit-backdrop-filter: blur(15px);
  backdrop-filter: blur(15px);



  &:hover {
    // border: 2px solid rgba(249, 249, 249, 0.5);
    scale:1.02;
  }

  h4{
    margin:20px;
  }
  p{
    align:center;
   
  }
  .pera{
    margin-bottom:20px;
  }
 


  @media (max-width: 1278px) {
    display:flex;
  flex-direction: column;
    min-height:850px;
margin:20px;
  }
`
const Profile = styled.div`
display:flex;
justify-content:start;
align-items:center;


img{
  width:50px;
  height:50px;
  border-radius:50px;
  self-align:left;
}
h4{
  font-size:1.5rem;
  color:#404040;

  @media (max-width: 1278px) {
   font-size:1.3rem;
   width:300px;

  }
}

@media (max-width: 1278px) {
   

  }

`
const Star = styled.div`
display:flex;
align-items:center;
justify-content:flex-start;





`
const StarN = styled(StarIcon)`

@media (max-width: 1278px) {
  font-size: 20px;

  }


`
const Time = styled.div`
color:#888;
padding-left:10px;

`




const ImgM = styled.div`
width:38%;
min-height:40vh;

img{
  height:100%;
  width:100%;

   @media (max-width: 1278px) {
   height:55vh;
   width:100%;

  }
}

 @media (max-width: 768px) {
   width:100%;

  }


`

const Rev = styled.div`
width:62%;


display:flex;
flex-direction:column;
justify-content:space-around;
align-items:flex-start;

p{
  font-size:1.1rem;
  padding: 1px 25px 30px 25px;
  //  padding: 5px 25px 50px 25px;
  
  border-bottom:1.4px solid #C8C8C8;

  @media (max-width: 1278px) {
   font-size:1rem;
   width:100%;
   padding:20px 10px 30px 12px;

  }
}
@media (max-width: 1278px) {
  width:90%;

 }




`
const ProfileStar = styled.div`
padding: 0 50px;
// height:30%;
p{
  font-size:0.8rem;
  padding:0;


}
// border-top:2px solid #C8C8C8;
// border-width:100%;

@media (max-width: 1278px) {



 }

`
const Img = styled(AccountCircleIcon)`

`

export default ReviewS