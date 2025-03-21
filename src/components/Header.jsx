import React from "react";

import {Navbar, Container, Nav} from 'react-bootstrap';
import {useState} from "react";
import logout from "../pages/Logout";

let userAuthed = null;
export function ChangeUserAuthed(value) {
    const [userAuthed, setUserAuthed] = useState("")
    setUserAuthed(value)
}

const Header = () => {

    //Logged in
    if(userAuthed) {
        console.log("Logged In");
        return (
            <Navbar variant={"dark"} bg={"dark"} expand={"lg"}>
                <Container>
                    <Navbar.Brand href={"/"}>VirtualStudyHub</Navbar.Brand>
                    <Navbar.Toggle aria-controls={"basic-navbar-nav"}/>
                    <Navbar.Collapse id={"basic-navbar-nav"}>
                        <Nav className={"me-auto"}>

                            <Nav.Link href={"/"}>Home</Nav.Link>
                            <Nav.Link href={"/logout"} onClick={logout}>Logout</Nav.Link>
                            <Nav.Link href={"/register"}>Register</Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
    else {
        console.log("Logged Out");
        return (
            <Navbar variant={"dark"} bg={"dark"} expand={"lg"}>
                <Container>
                    <Navbar.Brand href={"/"}>VirtualStudyHub</Navbar.Brand>
                    <Navbar.Toggle aria-controls={"basic-navbar-nav"}/>
                    <Navbar.Collapse id={"basic-navbar-nav"}>
                        <Nav className={"me-auto"}>

                            <Nav.Link href={"/"}>Home</Nav.Link>
                            <Nav.Link href={"/login"}>Login</Nav.Link>
                            <Nav.Link href={"/register"}>Register</Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
}
export default Header;