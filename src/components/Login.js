import styled from 'styled-components'
import React from 'react'


function Login() {
    return (
        <div>
            <Log>Login</Log>
        </div>
    )
}
const Log=styled.a`
    background-color: rgba(0,0,0,0.6);
    color: #f9f9f9;
    border: 1px solid #f9f9f9;
    border-radius: 4px;
    padding: 8px 16px;
    letter-spacing: 1.5px;
    transition: all 0.2s ease 0s;
    text-transform: uppercase;

    &:hover{
        background-color: #f9f9f9;
        color: #000;
        border-color: transparent;

    }
`;
export default Login
