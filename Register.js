import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { Col, Form, FormGroup,Row,Label,Input } from "reactstrap";

import { useState } from "react";
import React from "react";
import axios from "axios";
import Url from "../SpringApi/Url";
import Listn from "./Listn";



const Resister=()=>{
    
    const [id,setId]=useState('');
    const [firstname,setFirstname]=useState("");
    const [lastname,setLastname]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [repassword,setRepassword]=useState("");
    const [comapany,setCompany]=useState("");
    const [phonenumber,setPhonenumber]=useState("");

    const handle=(event)=>{
        console.log(event);
        save(event);
        event.preventDefault();
    }
    async function save(event){
        try{
            await axios.post(`${Url}/user/register`,
            {
                firsname:firstname,
                lastname:lastname,
                email:email,                       //left one-->database column right one-->values in input
                password:password,
                conpassword:repassword,
                dreamcompany:comapany,
                phonenumber:phonenumber,
            });
        
            toast.info("Done",{position:'bottom-right',theme:'colored',autoClose: 3000,});
            
            setId("");
                    setFirstname("");
                    setLastname("");
                    setEmail("");
                    setPassword("");
                    setPassword("");
                    setRepassword("");
                    setCompany("");
                    setPhonenumber("");
                    link();
        }
        catch(err){     
            // console.log(err);
                    toast.error('Failed',{position:'bottom-right',theme:'colored'});
                          
        }
    }
    const link=()=>{
        <Link to='/Listn'></Link>
    }


    return (
        <div  style={{backgroundColor:"rgb(255, 243, 243)",paddingLeft:'1cm',paddingRight:'1cm',paddingBottom:'1cm',border:'solid .01cm rgba(183, 51, 51, 0.304)',borderRadius:'.1cm',boxShadow:' 0 8px 16px 0 rgba(186, 27, 27, 0.2), 0 6px 20px 0 rgba(207, 66, 66, 0.19)'}}>
            <Form  onSubmit={handle}>
                <h2 className="text-center">Resister Now</h2>
                <Row>
                    <Col md="6">
                    <FormGroup>
        <Label for="firstname">Firstname</Label>
        <Input id="firstname" name="fn" value={firstname}
        onChange={(event)=>
    {
        setFirstname(event.target.value)
    }}
        placeholder="Enter Your First Name" type="text" required/>
                    </FormGroup>
                    </Col>
                    <Col md="6">
                    <FormGroup>
        <Label for="lastname">Lastname</Label>
        <Input id="lastname" name="ln" value={lastname}
        onChange={(event)=>
            {
                setLastname(event.target.value)
            }}
        placeholder="Enter Your Last Name" type="text"  required/>
                    </FormGroup>
                    </Col>
                </Row>


                <Row>
                <Col md="12">
                <Label for="email">Email : </Label>
        <Input id="email" name="ln" value={email}
        onChange={(event)=>
            {
                setEmail(event.target.value)
            }}
        placeholder="Enter Your Email" type="email" required />
                </Col>
                </Row>
                <br></br>
                <Row>
                    <Col md="6">
                    <FormGroup>
        <Label for="password">Password:</Label>
        <Input id="password" name="pwd" value={password}
        onChange={(event)=>
            {
                setPassword(event.target.value)
            }}
        placeholder="Enter Your Password" type="password" required />
                    </FormGroup>
                    </Col>
                    <Col md="6">
                    <FormGroup>
        <Label for="repassword">Confirm Password</Label>
        <Input id="repassword" name="cpwd" value={repassword}
        onChange={(event)=>
            {
                setRepassword(event.target.value)
            }}
        placeholder="Re-enter your password" type="password" required />
                    </FormGroup>
                    </Col>
                </Row>
                
                <Row>
                <Col md="12">
                <Label for="com">Company : </Label>
        <Input id="com" name="company" value={comapany}
        onChange={(event)=>
            {
                setCompany(event.target.value)
            }}
        placeholder="Enter Your Dream company " type="text"  required />
                </Col>
                </Row>
                <br></br>
                     <Row>
                <Col md="12">
                <Label for="ph_num">Phone Number : </Label>
        <Input id="ph_num" name="PhoneNumber" value={phonenumber}
        onChange={(event)=>
            {
                setPhonenumber(event.target.value)
            }}
        placeholder="Enter Your Phone Number" type="text"  required />
                </Col>
                </Row>

                <Col>
                <FormGroup check>
                    <Input id="exampleCheck" name="check" type="checkbox" required />
                     <Label check for="exampleCheck">Term & Condition</Label>
                     </FormGroup>
                     </Col>

                    
                     <br></br>
                     <div className="text-center">
                        
                     <Button  color="success" type="submit"  >SUBMIT</Button>
                        
                        </div>         
              

            </Form>
        </div>
    );
}
export default Resister
