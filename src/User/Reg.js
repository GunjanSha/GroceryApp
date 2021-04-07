import React, { Component } from 'react';

// import swal from 'sweetalert';
import { Button, Card,  CardBody,Label,  Col, Container, Form, Input, InputGroup,  Row } from 'reactstrap';
import UserService from '../Service/UserService';
    // let fName;
    //  let  lName;
    //   let userName;  
    //   let password;
    //   let email;
    //   let phone;
    //   let address;

class Reg extends Component {


  constructor() {

    super();

    this.state = {

      fName: '',
      lName:'',
      userName:'',  
      password: '',
      email: '',
      phone: '',
      address: ''
    }

    this.changeFNameHandler = this.changeFNameHandler.bind(this);
    this.changeLNameHandler = this.changeLNameHandler.bind(this);
    this.changeUserNameHandler = this.changeUserNameHandler.bind(this);
    this.changePasswordHandler = this.changePasswordHandler.bind(this);
    this.changeEmailHandler = this.changeEmailHandler.bind(this);
    this.changePhoneHandler = this.changePhoneHandler.bind(this);
    this.changeAddressHandler = this.changeAddressHandler.bind(this);
    this.saveOrUpdateUser = this.saveOrUpdateUser.bind(this);
  }
    componentDidMount(){
      // step 4
      if(this.state.id === '_add'){
          console.log("In Component did mount add");
          return
      }else{
          // UserService.registrationForm(this.state.id).then((res) =>{
          //     let user = res.data;
          //     this.setState({fName: user.fName,
          //         lName: user.lName,
          //         userName:user.userName,
          //         email:user.email,
          //         password:user.password,
          //         phone:user.phone,
          //         address:user.address    
          //     });
             

          // });
      }        
  }
  saveOrUpdateUser = (c) => {
     c.preventDefault();
    
      let user = {fName: this.state.fNname, lName: this.state.lName, userName:this.state.userName,password:this.state.password,email:this.state.email,phone:this.state.phone,address:this.state.address};
      
      // fName = String(this.state.fName);
      // lName = String(this.state.lName);
      // password = String(this.state.password);
      // userName= String(this.state.userName);
      // email = String(this.state.email);
      // phone= String(this.state.phone);
      // address = String(this.state.address);
      console.log('user=> ' + JSON.stringify(user));
      UserService.registrationForm(user).then((res) =>{
            let data = res.data;
            this.setState({fName: data.fName,
                lName: data.lName,
                userName:data.userName,
                email:data.email,
                password:data.password,
                phone:data.phone,
                address:data.address    
            });
            });
      // step 5
          // if(this.state.id === '_add'){
          //     if(c_name ==="" ||  primarySkill ==="" ||  secondarySkill==="" || qualification ==="" || noticePeriod ==="" || location ==="" || experience ===""  ){  swal("Worng input","Please Fill All Fields!" , "error"); }
          //     else if(!Number(noticePeriod) ){
          //         swal("Wrong Input","Notice period will be in numeric only" ,"error");
          //     }
          //     else if(!Number(experience)){
          //         swal("Wrong Input","Experience will be in numeric only" ,"error");
          //     }
          //     else if(Number(noticePeriod)<0){
          //         swal("Wrong Input","Notice Period can not be negative" ,"warning")
          //     }
          //     else if(Number(experience)<0){
          //         swal("Wrong Input","Experience can not be negative" ,"warning")
          //     }
          //     else {
          //         CandidateService.createCandidate(candidate).then(res =>{
          //              this.props.history.push('/Candidate');
              
          //     });}
          // }
          // else{
          //     if(c_name ==="" ||  primarySkill ==="" ||  secondarySkill==="" || qualification ==="" || noticePeriod ==="" || location ==="" || experience ===""  ){ swal("Worng input","Please Fill All Fields!" , "error");}
          //     else if(!Number(noticePeriod) ){
          //         swal("Wrong Input","Notice period will be in numeric only" ,"error");
          //     }
          //     else if(!Number(experience)){
          //         swal("Wrong Input","Experience will be in numeric only" ,"error");
          //     }
              
          //     else{
          //         CandidateService.updateCandidate(candidate,this.state.id).then( res => {
          //         this.props.history.push('/Candidate');
          //      });}
          //     }
  }
  
  changeFNameHandler= (event) => {
      this.setState({fName: event.target.value});
    
  }
  changeLNameHandler= (event) => {
      this.setState({lName: event.target.value});
     
    
  }
  changeUserNameHandler= (event) => {
      this.setState({userName: event.target.value});
  }

  changePasswordHandler= (event) => {
      this.setState({password: event.target.value});
  }

  changeEmailHandler= (event) => {
   this.setState({email: event.target.value});   
  }
  changePhoneHandler= (event) => {
      this.setState({phone: event.target.value});
  }
  changeAddressHandler= (event) => {
      this.setState({address: event.target.value});
  }

  // register(event) {


  //   fetch('http://localhost:8085/grocery/register', {

  //     method: 'post',

  //     headers: {

  //      'Accept': 'application/json',

  //       'Content-Type': 'application/json'

  //     },

  //     body: JSON.stringify({

  //       fName: this.state.fName,
  //       lName: this.state.lName,
  //       userName: this.state.userName,
  //       email: this.state.email,
  //       password: this.state.password,
  //       address: this.state.address,
  //       phone: this.state.phone

  //     })

  //   }).then((Response) => Response.json())

  //     .then((Result) => {

  //       if (Result.Status === 'Success')

  //               this.props.history.push("/Dashboard");

  //       else

  //         alert('Sorrrrrry !!!! Un-authenticated User !!!!!')

  //     })

  // }
  

 render() {


    return (

      <div className="app flex-row align-items-center">

        <Container>

          <Row className="justify-content-center">

            <Col md="9" lg="7" xl="6">

              <Card className="mx-4">

                <CardBody className="p-4">
                
                  <Form >

                    <div  className=" row mb-2 pageheading">

                      <div className="col-sm-12 btn btn-light disabled  btn-lg">

                        Sign Up

                        </div>

                    </div>

                    <InputGroup className="mb-3">
                    <Label >Name : </Label>
                      <Input type="text"  onChange={this.changeFNameHandler} placeholder="Enter First Name" />
                      
                      <Input type="text"  onChange={this.changeLNameHandler} placeholder="Enter Last Name" />
                    </InputGroup>

                    <InputGroup className="mb-3">
                    <Label>UserName : </Label>
                      <Input type="text"  onChange={this.changeUserNameHandler} placeholder="Enter User" />

                    </InputGroup>

                    <InputGroup className="mb-3">
                    <Label >Password : </Label>
                     <Input type="password"  onChange={this.changePasswordHandler} placeholder="Enter Password" />

                    </InputGroup>

                    <InputGroup className="mb-4">
                    <Label >Phone no. : </Label>
                      <Input type="text"  onChange={this.changePhoneHandler} placeholder="Enter Phone No." />

                    </InputGroup>
                    
                    <InputGroup className="mb-4">
                    <Label >Email : </Label>
                     <Input type="text"  onChange={this.changeEmailHandler} placeholder="Enter Email" />

                    </InputGroup>
                    <InputGroup className="mb-4">
                    <Label>Address : </Label>
                     <Input type="text"  onChange={this.changeAddressHandler} placeholder="Enter Address" />

                    </InputGroup>
                    

                    <Button  onClick={this.saveOrUpdateUser}  color="success" block>Create Account</Button>

                  </Form>

               </CardBody>

              </Card>

            </Col>

          </Row>

        </Container>

      </div>

    );

  }

}

export default Reg;