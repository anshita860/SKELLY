import React from 'react'
import styled from 'styled-components'

function Second() {
    return (
        <Container>
            <Heading>
                Payment Method
            </Heading>
            <Container1>
              <Content>
                <img src='./assets/images/paypal.png' />
              </Content>
              <Content>
                <img src='./assets/images/visa.png' />
              </Content>
              <Content>
                <img src='./assets/images/mastercard.png' />
              </Content>
              </Container1>
              <Container1>
              <Content>
                <img src='./assets/images/mastercard.png' />
              </Content>
              <Content>
                <img src='./assets/images/discover.png' />
              </Content>
              <Content>
                <img src='./assets/images/deal.png' />
              </Content>
              </Container1>
            <Heading>
                Delivery Method
            </Heading>
            <Container1>
                <Content2>
                    <img src='./assets/images/inpost2.png'/>
                    <h6>$20.00</h6>
                </Content2>
                <Content2>
                    <img src='./assets/images/dpd2.png'/>
                    <h6>$12.00</h6>
                </Content2>
            </Container1>
            <Container1>
                <Content2>
                    <img src='./assets/images/dhl.png'/>
                    <h6>$15.00</h6> 
                </Content2>
                <Content2>
                    <img src='./assets/images/fedex.png'/>
                    <h6>$10.00</h6>
                </Content2>
            </Container1>
        </Container>
    )
}
const Container=styled.div`
  width: 30%;

`;
const Container1=styled.div`
     display: flex;
     width: 100%;
`;
const Heading=styled.div`
   margin-top: 2%;
   margin-bottom: 20px;
   font-weight: 600;
`;
const Content=styled.div`
   display: flex;
    img{
       height: 40px;
       border: 1px solid #ebe6e6;
       border-radius:32px;
       padding: 4px;
    }
   
   margin-right: 2%;
   margin-bottom: 3%;
`;
const Content2=styled.div`
     display: flex;
     justify-content: space-around;
     border: 1px solid #ebe6e6;
     border-radius:25px;
     padding: 0px;
     width: 100%;
     margin-right:10px;
     margin-bottom: 10px;
     img{
         height: 40px;
         padding: 8px 8px 0px 2px;
         border-radius:22px;

     }
     h6{
         padding-top: 0px;
     }
`;
export default Second
