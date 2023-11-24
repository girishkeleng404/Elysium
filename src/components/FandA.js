import React from 'react'
import styled from 'styled-components'
import Founder from './Founder'
import Address from './Address'

function FandA() {
  return (
    <Div>

        <Founder/>
        <Address/>
    </Div>
  )
}

const Div = styled.div`



@-webkit-keyframes bg-scrolling-reverse {
    100% {
      background-position: 50px 50px;
    }
  }
  @-moz-keyframes bg-scrolling-reverse {
    100% {
      background-position: 50px 50px;
    }
  }
  @-o-keyframes bg-scrolling-reverse {
    100% {
      background-position: 50px 50px;
    }
  }
  @keyframes bg-scrolling-reverse {
    100% {
      background-position: 50px 50px;
    }
  }
  @-webkit-keyframes bg-scrolling {
    0% {
      background-position: 50px 50px;
    }
  }
  @-moz-keyframes bg-scrolling {
    0% {
      background-position: 50px 50px;
    }
  }
  @-o-keyframes bg-scrolling {
    0% {
      background-position: 50px 50px;
    }
  }
  @keyframes bg-scrolling {
    0% {
      background-position: 50px 50px;
    }
  }
  
  
  
  
  
  margin-top: 3.5rem;
  padding-top:3rem;
  color: #888;
 


background:url(../img/amime.png) repeat 0 0;

  -webkit-animation: bg-scrolling-reverse 0.92s infinite;
 
  -moz-animation: bg-scrolling-reverse 0.92s infinite;
  
  -o-animation: bg-scrolling-reverse 0.92s infinite;

  animation: bg-scrolling-reverse 0.92s infinite;
 
  -webkit-animation-timing-function: linear;
  -moz-animation-timing-function: linear;
  -o-animation-timing-function: linear;
  animation-timing-function: linear;
  }

`

export default FandA