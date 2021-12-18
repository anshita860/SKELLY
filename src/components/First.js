
import styled from 'styled-components'
import React, {useState,useEffect} from 'react'
import Form from './Form'
import myStyles from './myStyles.css'


function First() {
   
    return (
        <div>
        <Container1>
            <Log>
              <a href="">LOGIN</a>
            </Log>
            <Sign>
               <a href="">SIGNUP</a> 
            </Sign>
            
        </Container1>
        <Container2>
          <h5>Shipping information</h5>
        </Container2>
        <Container3>
           <Form />
        </Container3>
        </div>
    )
}
const Container1=styled.div`
   margin-top:9px;
   display: flex;
`;
const Log=styled.a`
   margin-right: 15px;
   border: 2px solid transparent;
   border-radius: 18px;
   background-color: #1ad7c2;
   padding: 6px 26px;  
   width: 50px;
   text-align:center;
   transition: all 0.2s ease 0s;
   text-transform: uppercase;
   a{
      text-decoration: none;
      color: black;
   }
   &:hover{
        background-color: #f9f9f9;
        color: #000;
        border-color: transparent;
    }

`;
const Sign=styled.a`
   margin-left: 10px;
   border: 2px solid transparent;
   border-radius: 18px;
   background-color: #f9f9f9;
   padding: 6px 26px;  
   width: 50px;
   text-align:center;
   transition: all 0.2s ease 0s;
   text-transform: uppercase;
   a{
      text-decoration: none;
      color: black;
   }
   &:hover{
      background-color: #1ad7c2;

    }
`;
const Container2=styled.div`
   padding-left: 2px;
`;
const Container3=styled.div`
   
`;

export default First
