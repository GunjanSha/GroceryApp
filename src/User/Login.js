import React, { Component } from 'react';
// import '../App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, CardBody,Label, CardGroup, Col, Container, Form, Input, InputGroup,  Row } from 'reactstrap';

class Login extends Component {

    constructor() {

       super();


        this.state = {

            Email: '',

            Password: ''

        }
        this.Password = this.Password.bind(this);

        this.Email = this.Email.bind(this);

        this.login = this.login.bind(this);

    }

    Email(event) {

        this.setState({ Email: event.target.value })

    }

    Password(event) {

        this.setState({ Password: event.target.value })

    }

    login(event) {

        debugger;

        fetch('http://localhost:8085/grocery/login/{this.Email}/{this.Password}', {

            method: 'post',

            headers: {

                'Accept': 'application/json',

                'Content-Type': 'application/json'

            },

           body: JSON.stringify({

                Email: this.state.Email,

                Password: this.state.Password

            })

        }).then((Response) => Response.json())

            .then((result) => {

                console.log(result);

                if (result.Status === 'Invalid')

                    alert('Invalid User');

                else

                    this.props.history.push("/Dashboard");

            })

    }


    render() {


        return (

            <div className="app flex-row align-items-center">

                <Container>

                    <Row className="justify-content-center">

                        <Col md="9" lg="7" xl="6">

                            <CardGroup>

                                <Card className="p-2">

                                    <CardBody>

                                        <Form>

                                            <div  className=" row mb-4 pageheading">

                                                <div className="col-sm-12 btn btn-light disable btn-lg">

                                                    Login 

                                            </div>

                                            </div>

                                            <InputGroup className="mb-2">

                                            <Label for="exampleEmail">Email :  </Label><br/> <br/> 
                                            <Input type="text" onChange={this.Email} placeholder="Enter Email" />
                                            </InputGroup>

                                            <InputGroup className="mb-4">

                                            <Label for="exampleEmail">Password :   </Label>
                                            <Input type="password" onChange={this.Password} placeholder="Enter Password" />

                                            </InputGroup>
                                               {/* <a href="#" > Forgot password</a> <br/>
                                             
                                             <button className="btn btn-success" onClick={this.login} color="success" block>Login</button> */}
                                            <div className="d-grid gap-5 col-7 mx-auto">
                                            <Button color="success" size="lg" onClick={this.login}  type="submit">Login</Button>
                                                    </div>
                                        </Form>

                                   </CardBody>

                                </Card>

                            </CardGroup>

                        </Col>

                    </Row>

                </Container>

            </div>
            
                       
                 

        );

    }
}
export default Login;