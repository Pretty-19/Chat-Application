import React, { Component } from 'react';
import {Nav,Navbar,Button,NavDropdown,Form,FormControl} from 'react-bootstrap';

export default class Searchbar  extends Component{
    render(){
        return (
        
        <Navbar  bg="dark" variant="dark" expand="lg"  >
        <Navbar.Brand href="#" >Techat</Navbar.Brand>
        <Form className="d-flex align-items-center  col-sm-7" >
            <FormControl
              type="search"ls
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
          <div class="col-2">
          <Button variant="outline-success" >Search</Button>
          </div>
          </Form>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mx-auto my-2 my-lg-0"
            style={{ maxHeight: '100px'  }}
            navbarScroll
          >
            <NavDropdown title="Account" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Settings</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>  
      );
    }
} 