import styled from 'styled-components'
import React from 'react'

function Sec() {
    return (
        <Container>
            <First>
              <h3>Shipping and Payment</h3>
            </First>
            <Second>
               <Icon1>
                <img src="/assets/images/cart2.png" alt="Cart" />
               </Icon1>
               <Icon2>
                <img src="/assets/images/person5.png" alt="" />
               </Icon2>
            </Second>
        </Container>
    )
}
const Container= styled.div`
   display: flex;
   flex-direction: row;
   justify-content: space-around;
   height: 60px;
   width: 100%;
`;
const First=styled.div`
   margin: 9px;
   h3{
   font-weight: 500;
   }
`;
const Second=styled.div`
   margin: 9px 9px 9px 50%;
   width: 15%;
   display: flex;
   justify-content: space-around;
`;
const Icon1=styled.div`
   img{
    height: 40px;
    border-radius:50%;
    border: 2px solid #1ad7c2;
   }
`;
const Icon2=styled.div`
  
  img{
    height: 40px;
    border-radius:50%;
    background-color: 2px solid #1ad7c2;
   }
   margin-right: 5px;
`;
export default Sec
