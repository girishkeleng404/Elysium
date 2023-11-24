import React from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import styled from 'styled-components';
// import { LocationOn } from '@mui/icons-material';

// import Flip from 'react-reveal/Flip';
// import Fade from 'react-reveal/Fade';


function Address() {
  return (


    <DivM className='address'>

      <Div1>
        <Logo style={{ fontSize: '2rem' }} />
        <h1>Our Address:</h1>
      </Div1>

      <Div2>

        <D2s1>
          {/* <Flip right cascade > */}
          <p>2nd floor, H/No. - 01, Beside Pantaloons, Opposite to
            Krishna Sweets, Nabagraha Path, Silpukhuri, Guwahati,
            Assam, India. </p>

          <p className='p'> Exceptional Ratings: We're not just saying it – our members have spoken! With the highest ratings and rave reviews on Google Maps, we've earned the title of the best gym in town</p>
          {/* </Flip> */}
        </D2s1>
        <D2s2>

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
        </D2s2>
      </Div2>
    </DivM>
  );
}








const DivM = styled.div`
  display : flex;
  flex-direction: column;
  align-items : center;
  margin-top: 50px;
`;
const Div1 = styled.div`
display : flex;
align-items : center;
justify-content : center;
  
`;

const Logo = styled(LocationOnIcon)`
  margin:0 5px;
`

const Div2 = styled.div`
display : flex;
width : 70vw;
margin:50px;

@media (max-width: 768px) {
   flex-direction: column;
   justify-content: flex-start;
   align-items : center;

  }

  
`;
const D2s1 = styled.div`
  width : 60%;

  display : flex;
  flex-direction: column;
  justify-content: flex-start;
  // align-items : flex-start;
  align-items : center;
  
p{
  @media (max-width: 768px) {
  
 width:70vw;
  margin-left:0;
  self-align: start;
  text-align: center;


  }
}

  .p{
 margin-top: 70px;
 font-weight:400;

  }

  @media (max-width: 768px) {
  //  flex-direction: row;
  justify-content:flex-start;
  align-item:flex-start;

  }
`;
const D2s2 = styled.div`
width : 40%;

@media (max-width: 768px) {
  width:90vw;
  overflow:hidden;
  margin-top:50px;
  margin-left:0;

  }
`;

export default Address;