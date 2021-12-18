import React, { Component } from 'react'
import styled from 'styled-components'
import myStyles from './myStyles.css'

export class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            email: '',
            adress: '',
            fname: '',
            city: '',
            lname: '',
            pcode: '',
            phnnum: '',
            poland: '',
        }
    }
    handleEmail= (event)=>{
        this.setState({
            email: event.target.value
        })
    }
    handleAdress= (event)=>{
        this.setState({
            adress: event.target.value
        })
    }
    handleFname= (event)=>{
        this.setState({
            fname: event.target.value
        })
    }   
    handleCity= (event)=>{
        this.setState({
            city: event.target.value
        })
    }
    handleLname= (event)=>{
        this.setState({
            lname: event.target.value
        })
    }
    handlePcode= (event)=>{
        this.setState({
            pcode: event.target.value
        })
    }   
    handlePhnNum= (event)=>{
        this.setState({
            phnnum: event.target.value
        })
    }
    handlePoland= (event)=>{
        this.setState({
            poland: event.target.value
        })
    }   
    render() {
        return (
            
            <form className='formclass'>
                <Content1>
                <Wrap1>
                    
                    <input type="email" placeholder="Email" value={this.state.email} onChange={this.handleEmail}/>
                </Wrap1>
                <Wrap2>
                    
                    <input type="text" placeholder="Adress" value={this.state.adress} onChange={this.handleAdress}/>
                </Wrap2>
                </Content1>
                <Content1>
                <Wrap1>
                    
                    <input type="text" placeholder="First Name" value={this.state.fname} onChange={this.handleFname}/>
                </Wrap1>
                <Wrap2>
                    
                    <input type="email" placeholder="City" value={this.state.city} onChange={this.handleCity}/>
                </Wrap2>
                </Content1>
                <Content1>
                <Wrap1>
                    
                    <input type="text" placeholder=":Last Name" value={this.state.lname} onChange={this.handleLname}/>
                </Wrap1>
                <Wrap2>
                    
                    <input type="text" placeholder="Postal Code" value={this.state.pcode} onChange={this.handlePcode}/>
                </Wrap2>
                </Content1>
                <Content1>
                <Wrap1>
                    
                    <input type="text" placeholder="Phone Number" value={this.state.phnnum} onChange={this.handlePhnNum}/>
                </Wrap1>
                <Wrap2>
                    
                    <input type="text" placeholder="Poland" value={this.state.poland} onChange={this.handlePoland}/>
                </Wrap2>
                </Content1>
            </form>
            
        )
    }
}
const Content1=styled.div`
   display:flex;
`;
const Wrap1=styled.div`
    margin: 2% 0% 0% 0%;
    input{
    border-radius: 20px;
    padding: 9px;
    border: 1px solid #ebe6e6;
    }

`;
const Wrap2=styled.div`
    margin: 2% 0% 2% 3%;
    input{
    border-radius: 20px;
    padding: 9px;
    border: 1px solid #ebe6e6;
    }
`;
export default Form
 
