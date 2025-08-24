import React, { useState } from 'react';
import './Home.css';
import Bootstrap from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


export default function Home() {
  const navigate = useNavigate();

  const goToMain = () => {
    navigate("/main");
  };

  return (

<Container fluid className="home-page vh-100 d-flex justify-content-center align-items-center">
      <Row>
        <Col className="text-center text-white">
          <h1 className='headingHome'>The ToDo List 2.0</h1>
          Join the revival!
          <br />
          <br />
          <Button variant="primary" className="mt-3" onClick={goToMain} >
            Get Started
          </Button>
        </Col>
      </Row>
    </Container>

   
  );
};

