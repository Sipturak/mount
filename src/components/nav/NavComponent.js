import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'


function NavComponent() {
    return (   
        <>
            <Navbar bg = "dark" variant="dark" style = {{opacity: "87%"}} onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}>
                <Navbar.Brand href="#home"></Navbar.Brand>
                <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">About</Nav.Link>
                <Nav.Link href="#pricing">Albums</Nav.Link>
                </Nav>
            </Navbar>
        </>
    )
}

export default NavComponent
