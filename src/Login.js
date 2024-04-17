import React from 'react';
import CardBody from 'react-bootstrap/CardBody';
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import './index.css';

const Login = () => {
    return ( 
        <div className='container p-5 pt-0'>
            <div className='container card-login p-5'>
                <div className='container'>
                    <Form className="form">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className="FormLabel">Email</Form.Label>
                            <Form.Control style={{borderRadius: '18px',height: '50px', backgroundColor: "white", border: "1px solid black", color: "black"}} type="email" placeholder="Username or Email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label className="FormLabel">Password</Form.Label>
                            <Form.Control style={{borderRadius: '18px',height: '50px', backgroundColor: "white", border: "1px solid black", color: "black"}} type="email" placeholder="Password" />
                        </Form.Group>

                        <Form.Group className="mb-3 FormLabel"  controlId="formBasicCheckbox">
                            <Form.Check  type="checkbox" label="Remember Password" />
                        </Form.Group>
                        <div className='text-center'>
                        <Button className="submit mt-0" variant="danger" type="submit" formAction="/signup" style={{ backgroundColor: '#b09368', border: 'none' }}>
                            Submit
                        </Button>
                        </div>
                    </Form>
                </div>
             </div>
        </div>
     );
}
 
export default Login;