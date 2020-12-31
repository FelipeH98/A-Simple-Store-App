import React, {useState} from 'react';
import { Navbar, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';

function Mynavbar() {
    return (
        <div className="bar-fix">
            <Navbar bg="dark" variant="dark">
                <div className="nav-limit">
                    <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src="https://i.pinimg.com/originals/77/c3/66/77c366436d8bd35fe8b3ce5b8c66992e.png"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />
                    </Navbar.Brand>
                    Mi tienda
                </div>
            </Navbar>
            
        </div>
    )
}

export default Mynavbar
