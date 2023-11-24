import React from 'react'
import styled from 'styled-components'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
// import Fade from 'react-reveal/Fade';
// import Flip from 'react-reveal/Flip';

<style>
  @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

  @import url('https://fonts.googleapis.com/css2?family=Ubuntu&display=swap');
</style>




function Footer() {
  return (
    <DivM id='Footer'>
      <D>
        <Div1>

          <Text>
            {/* <Fade buttom>  */}
            <h1>Subscribe to newsletter </h1>
{/* </Fade> */}
{/* <Fade buttom cascade>  */}
            <p>At Elysium, we state a vision of an ideal place for
                happiness. A place that can resonate with you not only
                physically but spirituality as well so as to nurture the better
                human being within you.
            </p>
            {/* </Fade> */}

          </Text>
          <Mail>
            <input type='text' className='name' placeholder='Your Name' ></input>
            <input type='text' className='mail' placeholder='Your Email Address' ></input>
            <a href='# '> <p> Subscribe</p>  </a>
          </Mail>

        </Div1>
      </D>
      <Div2>

        <Footer1>
          {/* <Fade left>  */}
          <Img>
            <img src='../img/LogoFinal1.png' alt='' />
          </Img>
          {/* </Fade> */}
          {/* <Flip left cascade >    */}
          <p style={{ color: '#ffffff' }} >At Elysium, we state a vision of an ideal place for
                happiness. A place that can resonate with you not only
                physically but spirituality as well so as to nurture the better
                human being within you.</p>
                {/* </Flip> */}
          <SocialLogo>

            <a href='#y'>  <Facebook style={{ color: 'white' }} /></a>
            <a href='https://www.instagram.com/theelysium.lifestyle/' target='instagram' > <Instagram style={{ color: 'white' }} /></a>
            <Twitter style={{ color: '#ffffff' }} />

          </SocialLogo>
        </Footer1>
        <Footer2>
          <h3>MENU</h3>
          <ul>
            {/* <Flip left cascade >    */}
            <li>Home</li>
            <li>About</li>
            <li>Blog</li>
            <li>Contact</li>
            <li>Schedule</li>
            <li>Programs</li>
          {/* </Flip> */}
          </ul>

        </Footer2>
        <Footer3>
          <h3>Contacts</h3>
          <Location>
            <LocationLogo style={{ color: '#9ACD32', fontSize: '2.1rem' }} />
            {/* <Flip left cascade >   */}
            <p> 2nd floor, H/No. - 01, Beside Pantaloons, Opposite to Krishna Sweets, Nabagraha Path, Silpukhuri, Guwahati, Assam, India. </p>
         {/* </Flip>  */}
          </Location>
          <Phone>
          
            <PhoneLogo style={{ color: '#9ACD32', fontSize: '2.1rem' }} />
            {/* <Flip left cascade > */}
                <p> 81330 72750</p> 
                {/* </Flip> */}
          </Phone>
          <Email>
            <EmailLogo style={{ color: '#9ACD32', fontSize: '2.1rem' }} />
            {/* <Flip left cascade >    */}
            <p>Elysiumgym01@gmail.com</p>
            {/* </Flip> */}
          </Email>


        </Footer3>



      </Div2>
      <Div3>


        <p>© 2023 Elysium. All rights reserved</p>
        <Tc>


          <ul>
            <li>Pricacy Policy</li>
            <li>Terms & Service</li>
            <li>Ligal Info</li>
          </ul>

        </Tc>


      </Div3>




    </DivM>
  )
}


const DivM = styled.div`
background:black;
height:130vh;
z-index:10;
// font-family: 'Roboto', sans-serif;
font-family: 'Ubuntu', sans-serif;

 @media (max-width: 768px) {
  
// height:250vh;
height:auto;
// justify-content:space-between;
  }

`
const D = styled.div`
background:#080808;
height: 45%;
margin-bottom:50px;

 @media (max-width: 768px) {
  padding-bottom:100px;
  margin-bottom:50px;
  // height:35%;
  height:auto;
  
//  border-bottom: 1px solid #282828;
  }

`
const Div1 = styled.div`
height: 98%;
width:75%;
margin-bottom:12px;

// background:#101010;
margin:auto;
border-bottom: 1px solid #282828;
color:white;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;

 @media (max-width: 768px) {
  height:auto;
// height:50%;
  }

`
const Text = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
margin:40px;

h1{
  
margin:30px;
text-transform:uppercase;
font-weight:bold;
font-size:2.4rem;
}

`
const Mail = styled.div`
display:flex;

input{

  padding:20px;
  margin:10px 20px;
  outline:none;
  min-width:300px;
  font-size:100%;

}

a {
  box-shadow: inset 0 0 0 0 #000000;
  color: #fff;
	// padding: 0 .25rem;
	// margin: 0 -.25rem;
  text-align: center;
  transition: color .2s ease-in-out, box-shadow 0.25s ease-in-out;
}
a:hover {
  color: #fff;
  box-shadow: inset 200px 0 0 0 #000000 ;;
}

/* Presentational styles */
a {
	color: #fff;
  font-family: 'Poppins', sans-serif;
  font-size: 20px;
	font-weight: 700;
  text-align: center;
  
  // line-height: 1.5;
  background-color:#9ACD32;
  text-decoration: none;
  border-radius:2px;
  max-height:70px;
  margin: 10px 20px;
  padding:10px 36px;
  display:flex;
  align-items: center;
  text-transform:uppercase;

}




  





.mail{

}



@media (max-width: 768px) {
  flex-direction: column;
}

`
const Div2 = styled.div`
display:flex;
align-items:center;
justify-content:space-between;
color:white;
width:75%;
// flex-wrap:wrap;
margin:auto;
height:45%;
border-bottom:0.1px solid #282828;

@media (max-width: 768px) {
  flex-direction: column;
  // height:300vh;
  justify-content:flex-start;
  align-items: flex-start;
  height:auto;
}

`
const Footer1 = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:flex-start;
// flex-grow: 1;
  width: 30%;
  margin-right: 20px;
  padding-top:50px;


p{
  margin:10px 10px 20px 0;
  font-size:1.11rem;


  @media (max-width: 768px) {
  
 width:80%;

  }
}

 @media (max-width: 768px) {
  width:100vw;
  margin:auto;
  align-items:flex-start;
  justify-content:center;
  // flex: 30%;
  height:auto;
  margin-bottom:100px;

  }

`
const Img = styled.div`
margin-top:20px;

img{
  width: 350px;


  @media (max-width: 768px) {
  
  width:200px;
  self-align:center;
  text-align:center;
  }

}

`
const SocialLogo = styled.div`
display:flex;
justify-content:space-between;
align-items:center;

`
const Facebook = styled(FacebookIcon)`
margin-right:10px;
cursor:pointer;

`
const Instagram = styled(InstagramIcon)`
margin-right:10px;
cursor:pointer;


`
const Twitter = styled(TwitterIcon)`
margin-right:10px;
cursor:pointer;

`

const Footer2 = styled.div`
display:flex;
// flex-direction:column;
align-items:center;
justify-content:flex-start;
flex-grow: 1;
  width: 30%;
  flex-wrap:wrap;
  padding-left:10px;

h3{
  color: #888;
  text-align: center;
  margin:20px;
  font-size:1.5rem;

   @media (max-width: 768px) {
  margin:0;

  }
}
ul{
  display:flex;
  flex-wrap:wrap;
  justify-content:flex-start;

   @media (max-width: 768px) {
  align-items: flex-start;
  width:100%;

  }
}
  ul li{
    font-size:1.2rem;
    text-decoration:none;
    list-style:none;
    margin:25px 20px;
    width:150px;
    // background-color:#888888;

     @media (max-width: 768px) {
  width:120px;
  // margin:0;

  }
  }



  @media (max-width: 768px) {
 
width:90vw;
height:30vh;
align-items:flex-start;
padding-left:0;
// height:200px;
height:auto;
margin-button:100px;
  }

`
const Footer3 = styled.div`
display:flex;
flex-direction:column;
justify-content:flex-start;
align-items:flex-start;

flex-grow: 1;

  width: 30%;
  h3{

    font-size:1.6rem;
    color:#888;
    text-transform:uppercase;
    margin:20px;

 @media (max-width: 768px) {
  
margin-left:0;
  }

  }


 @media (max-width: 768px) {
  width:90vw;
  margin:auto;
  justify-content:center;
  height:auto;
  margin-top:100px;
   margin-bottom:100px;

  }

`
const Location = styled.div`
display:flex;
flex-direction:row;
justify-content:center;
align-items:center;
margin:13px;


p{
  font-size:1.17rem;

}


`
const LocationLogo = styled(LocationOnIcon)`
margin-right:20px;

`

const Phone = styled(Location)`
margin:13px;
p{
  font-size:1.17rem;

}


`
const PhoneLogo = styled(PhoneIcon)`
margin-right:20px;

`
const Email = styled(Location)`
margin:13px;
p{
  font-size:1.17rem;

}
`
const EmailLogo = styled(EmailIcon)`
margin-right:20px;
`



const Div3 = styled.div`
height:10%;
margin:auto;
color:#8888;
width:75%;
display:flex;
justify-content:space-between;
align-items:center;
font-size:1.13;

 @media (max-width: 768px) {
  
flex-direction:column;
justify-content:center;
// height:10vh;
height:auto;
margin-top:80px;

  }

  p{
    
     @media (max-width: 768px) {
  
margin-bottom:10px;
  }
  }

`
const Tc = styled.div`

display:flex;

ul{
  display:flex;
}

ul li{
  list-style-type:none;
  text-decoration:none;
  margin:10px 20px;;
}


`

export default Footer