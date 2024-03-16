
import { faVideo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <Navbar className="bg-dark">
    <Container>
      <Navbar.Brand>
      
     <Link to={'/'} style={{textDecoration:'none'}}>
        <FontAwesomeIcon icon={faVideo} beat style={{color:'orange',fontSize:'30px'}} />{' '}
          <span className='ms-2' style={{color:'white',fontSize:'30px'}}>Media Player</span>
     </Link>
      </Navbar.Brand>
    </Container>
  </Navbar>
  )
}

export default Header