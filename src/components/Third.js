import styled from 'styled-components'
import React from 'react'

function Third() {
    return (
        <div>
            <Container>
                <Heading>
                 Your cart
                </Heading>
                <Container1>
                 <img src="./assets/images/tshirt.jpg" alt="T-shirt" />
                 <Content>
                     <Text1 className="fontweight">
                       T-Shirt
                     </Text1>
                     <Text2 className="fontweight">
                        Summer Vibes
                     </Text2>
                 </Content>
                 <Text3>
                    $89.99
                 </Text3>
                </Container1>
                <Container2>
                <img src="./assets/images/tshirt2.jpg" alt="T-shirt" />
                 <Content>
                     <Text1 className="fontweight">
                       Basic Slim
                     </Text1>
                     <Text2 className="fontweight">
                       Fit T-Shirt
                     </Text2>
                 </Content>
                 <Text3>
                     <div>$69.99</div>
                 </Text3>
                </Container2>
                <Container3>
                  <div>
                   Total Cost
                  </div>
                  <div className="fontweight">
                   $159.90
                  </div>
                          
                </Container3>
                <Container4>
                  <img src="./assets/images/truck.png" alt="Delivery" />
                  <Content>
                  <Text1>
                    You are $30.02 away
                  </Text1>
                  <Text2>
                     from free shipping
                  </Text2>
                       
                  </Content>
                </Container4>
                
            </Container>

        </div>
    )
}
const Container=styled.div`
`;
const Heading=styled.div`
   margin-bottom: 20px;
   font-weight: 600;
`;
const Container1=styled.div`
   display:flex;
   margin-bottom: 20px;
   img{
       height: 50px;
        border-radius: 50%;
   }
  
`;
const Content=styled.div`
  display: flex;
  flex-direction:column;

`;

const Text1=styled.div`
     margin: 4px 0px 0px 10px;
     
`;
const Text2=styled.div`
     margin: 0px 0px 0px 10px;
     
`;
const Text3=styled.div`
      div{
        margin-left:30px;
      }
      margin-top:26px;
      margin-left:50px;
      font-weight: 400;
`;
const Container2=styled.div`
   display:flex;
   margin-top: 20px;
   img{
   height: 50px;
    border: 2px solid transparent;
    border-radius: 50%;
   }
`;
const Container3=styled.span`
   text-align:center;
   display: flex;
   justify-content:space-around;
   background-color:#ebe6e6;
   margin-top:20px;
   margin-left: 10%;
   border: 2px solid transparent;
   border-radius: 22px;
   padding: 8px;
   width:80%;
   
`;
const Container4=styled.div`
   margin-top:20px;
   display: flex;
   justify-content:space-around;
   img{
   height: 20px;
    border: 2px solid transparent;
    border-radius: 50%;
    margin-top: 15px;
    margin-left: 10px;
   }
`;

export default Third
