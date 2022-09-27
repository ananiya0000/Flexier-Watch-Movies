import './Header.css'
import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
<style>
@import url('https://fonts.googleapis.com/css2?family=DynaPuff:wght@700&display=swap');
</style>

function Header() {
  return (
    <div className='header'>
        <Navbar>
        <Container className='container'>
            <Navbar.Brand className='amharictext' href="#home">ሃገረኛ</Navbar.Brand>
            <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
                ananigd0@gmail.com
            </Navbar.Text>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    </div>
  )
}

export default Header