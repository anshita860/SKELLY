import styled from 'styled-components'
import React from 'react'
function Header() {
  
    return (      
        <div>
          <Nav>
            <First>
               <Logo>
                <img src="/assets/images/logo.png" alt="iShop" />
               </Logo>
                <Title>
                  E-Shop
                </Title>
            </First>
            <Second>
               <a href="#">Men</a>
               <a href="#">Women</a>
               <a href="#">Kids</a>
            </Second>
            <Third>
              <img src="/assets/images/search3.png" alt="Search" />
              <img src="/assets/images/cart2.png" alt="Your Cart" />
              <img src="/assets/images/person5.png" alt="Profile" />
            </Third>
          </Nav>
        </div>
    )
}
const Nav=styled.nav`
    display: flex;
    flex-direction: row;
    height: 60px;
    background-color:#ebe6e6;
    justify-content: space-between;
`;
const First=styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom:8px;
    height: 60px;
    padding: 10px;
    font-family: 'Noto Sans Display', sans-serif;
    font-size: 25px;
`;
const Logo=styled.div`
   display: block;
   img{
    height: 40px;
   }
   margin-right: 10px;
`;
const Title=styled.div`
   margin-left: 20px;
   font-weight: 400;
`;
const Second=styled.a`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top:15px;
    font-weight: 700;
    width: 23%;
    $:hover{
      cursor:pointer;
    }
    a{
      text-decoration: none;
    }
`;
const Third=styled.div`
    display: flex;
    flex-direction: row;
    margin-top:15px;
    justify-content: space-between;
    width: 10%;
    img{
      height:30px;
    }
`;

export default Header;
