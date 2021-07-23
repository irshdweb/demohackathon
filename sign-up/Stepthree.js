import React from 'react';
import { Button, Card, Container, Form, Row, Col } from 'react-bootstrap';
import { useState } from 'react';

function Stepthree() {

    const formData = [];

    const [validated, setValidated] = useState(false);
    const [fname, setFname] = useState(false);
    const [mname, setMname] = useState(false);
    const [srname, setsrame] = useState(false);

    const[title, settitle] = useState('');
    const[firstName, setFirstName] = useState('');
    const[MidleName, setMidleName] = useState('');
    const[sirName, setsirName] = useState('');
    const[dob, setdob] = useState('');

    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
  
      setValidated(true);
    };

    let handlefname = (obj)=>{
        var regEx = /^[A-Za-z]+$/;
        if(obj.target.value.match(regEx)){
           setFname(false);
        }else{
            setFname(true);
            setFirstName(obj.target.value)
        }
    }

    let handlemname = (obj)=>{
        var regEx = /^[a-zA-Z '.-]+$/;
        if(obj.target.value.match(regEx)){
            setMname(false);
        }else{
            setMname(true);
            setMidleName(obj.target.value)
        }
    }

    let handletitle = (obj)=>{
        console.log(obj.target.value);
    }
    let handlesir = (obj)=>{
        var regEx = /^[a-zA-Z '.-]+$/;
        if(obj.target.value.match(regEx)){
            setsrame(false);
        }else{
            setsrame(true);
            setsirName(obj.target.value)
        }
    }
    return (
        <div>
  

<Container className="mt-3">
                
                <Row>
                    <Col>
                        <h2>Applicant 1</h2>
                        <Card>
                <Card.Body>
                    <Card.Title>Mortgages + signups</Card.Title>
                    <Card.Text>

                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="userName">
                            <Form.Label>Title</Form.Label>
                            <Form.Control placeholde="Title" onChange={handletitle} 
                            as="select"
                            required
                            >
                            <option value=""></option>
                            <option value="title1">title 1</option>
                            <option value="title2">title 2</option>
                            </Form.Control>
                    </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control  className={ fname ? 'border' : ''} type="text" placeholder="First Name" onChange={handlefname} required/>
                        </Form.Group>
                        {
                          
                          fname ? <span className="errormsg">Only accept alphabet letters</span> : ''
                                
                        }
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Middle Name (where applicable)</Form.Label>
                            <Form.Control className={ mname ? 'border' : ''}  type="text" placeholder="First Name" onChange={handlemname} required/>
                        </Form.Group>
                        {
                          
                          mname ? <span className="errormsg">Only accept alphabet letters and
                          apostrophe</span> : ''
                                
                        }
                        <Form.Group className="mb-3" controlId="Middle Name">
                            <Form.Label>Surename</Form.Label>
                            <Form.Control onChange={handlesir} className={ srname ? 'border' : ''} type="text" placeholder="Surename"  required/>
                        </Form.Group>
                        {
                          
                          srname ? <span className="errormsg">Only accept alphabet letters and
                          apostrophe</span> : ''
                                
                        }
                        <Form.Group className="mb-3" controlId="Middle Name">
                            <Form.Label>Date Of Birth</Form.Label>
                            <Form.Control type="date" placeholder="Date Of Birth" required/>
                        </Form.Group>

<div>
            <Button variant="secondary" type="text">
                            Back
                        </Button>
                        <Button variant="primary" type="submit" style={{float: "right"}}>
                            Next
                        </Button>
</div>

                    </Form>
                    </Card.Text>
                   
                </Card.Body>
                </Card>
                    </Col>
                    <Col>
                    <h2>Applicant 2</h2>
                        <Card>
                <Card.Body>
                    <Card.Title>Mortgages + signups</Card.Title>
                    <Card.Text>

                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="userName">
                            <Form.Label>Title</Form.Label>
                            <Form.Control placeholde="Title" onChange={handletitle} 
                            as="select"
                            required
                            >
                            <option value=""></option>
                            <option value="title1">title 1</option>
                            <option value="title2">title 2</option>
                            </Form.Control>
                    </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control  className={ fname ? 'border' : ''} type="text" placeholder="First Name" onChange={handlefname} required/>
                        </Form.Group>
                        {
                          
                          fname ? <span className="errormsg">Only accept alphabet letters</span> : ''
                                
                        }
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Middle Name (where applicable)</Form.Label>
                            <Form.Control className={ mname ? 'border' : ''}  type="text" placeholder="First Name" onChange={handlemname} required/>
                        </Form.Group>
                        {
                          
                          mname ? <span className="errormsg">Only accept alphabet letters and
                          apostrophe</span> : ''
                                
                        }
                        <Form.Group className="mb-3" controlId="Middle Name">
                            <Form.Label>Surename</Form.Label>
                            <Form.Control onChange={handlesir} className={ srname ? 'border' : ''} type="text" placeholder="Surename"  required/>
                        </Form.Group>
                        {
                          
                          srname ? <span className="errormsg">Only accept alphabet letters and
                          apostrophe</span> : ''
                                
                        }
                        <Form.Group className="mb-3" controlId="Middle Name">
                            <Form.Label>Date Of Birth</Form.Label>
                            <Form.Control type="date" placeholder="Date Of Birth" required/>
                        </Form.Group>

<div>
            <Button variant="secondary" type="text">
                            Back
                        </Button>
                        <Button variant="primary" type="submit" style={{float: "right"}}>
                            Next
                        </Button>
</div>

                    </Form>
                    </Card.Text>
                   
                </Card.Body>
                </Card>
                    </Col>
                </Row>

            </Container>
        </div>
    );
}

export default Stepthree;