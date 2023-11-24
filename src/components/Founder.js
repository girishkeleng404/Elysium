import React from "react";
import styled from "styled-components";
import NoteIcon from "@mui/icons-material/Note";
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';



function Founder() {
  return (
    <Div className="Founder">
      <DivM2> </DivM2>
      <Div1>
        <Div1s style={{ fontSize: "80px" }} />
        <H className="founder1">
          {" "}
          <h2>Word from the </h2> <br />
          <h1> Founder</h1>
        </H>
      </Div1>
      <Div2>
        <Div2S1>
          <Fade left>
            <img src="../img/founder.png" alt="" />

          </Fade>

          <Fade buttom cascade>
            <h1 className="name">Anchul Khound</h1>
          </Fade>
        </Div2S1>
        <Details>
          <Div2S2>


            <p>
              I was brought very secured environment for which I was really
              grateful for. But eventually the harsh realities of ife made me
              realize the need to upskill myself physically and mentally through
              which the gym gave mea ripple effect throughout my personality
              leading to a plethora of zeal built up in me to dream the
              unthinkable and +i reach the skies!
            </p>
            <p>Being in the fitness industry for 5 + years made me
              realise whal people are missing out on the basic
              Anchul Khound definition of fitness and the excitement to do more
              and be more in Thats why I've took the pledge to
              ‘make an impact!         </p>

          </Div2S2>

          <Link to="/FounderDetails">  <Learn>   <a href='# '> <p> Learn More</p>  </a></Learn></Link>

        </Details>
      </Div2>
    </Div>
  );
}





const Div = styled.div`


  max-width: 70vw;

  margin: auto;
  font-family: monospace;
  margin-bottom:100px;
  padding-bottom:100px;

  padding-top:50px;

  @media (max-width: 768px) {
     

  }


`;

const DivM2 = styled.div`


`

const Div1 = styled.div`
  display: flex;
  // flex-direction: column;
  justify-content: flex-start;
  align-items: center;


`;
const Div2 = styled.div`
  display: flex;
  justify-content: center;
  // align-items: center;


  @media (max-width: 768px) {
   flex-direction: column;
    // background-image: linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%);
    

  }
`;
const Div1s = styled(NoteIcon)`
margin-right:10px;
`;
const H = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
  font-size:1rem;
  align-items: center;
  justify-content: flex-start;

  }

  h2{
    @media (max-width: 768px) {
      font-size:1.2rem;
    }

  }
  h1{
    @media (max-width: 768px) {
      font-size:2rem;
    }

  }

`;

const Div2S1 = styled.div`
  width: 20vw;
  margin-top: 60px;
  img{
    transition:all 400ms;

    &:hover {
      
      scale:1.02;
    }
  }
.name{
  font-size:2rem;
  width:300px;
}

h1{
  
  @media (max-width: 768px) {
   font-size:1rem;

  }
}

`;
const Div2S2 = styled.div`
width: 60vw;
margin-top: 50px;

p{
  padding:10px;
  margin-bottom:20px;
  font-size:1.2rem;
  font-weight:medium;
}

@media (max-width: 768px) {
   width:80vw;

  }
`;
const Details = styled.div`
display:flex;
flex-direction:column;




`

const Learn = styled.div`

// margin-top: 20px;
// height: 40px;
// overflow: hidden;



a {
  box-shadow: inset 0 0 0 0 #000000;
  color: #fff;
  max-width: 200px;


 
	// padding: 0 .25rem;
	// margin: 0 -.25rem;
  text-align: center;
  transition: color .2s ease-in-out, box-shadow 0.25s ease-in-out;
}
a:hover {
  color: #fff;
  box-shadow: inset 300px 0 0 0 #000000 ;;
}

/* Presentational styles */
a {
animation: animateDown infinite 1.5s;

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

`

export default Founder;
