import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const BottomNav = ({ selected, setSelected }) => {
  return (
    <div>
      <Link to="/logIn">
        <Button variant="light" onClick={() => setSelected('login')} className={selected === 'login' ? 'active' : ''}>
          Login
        </Button>
      </Link>
    </div>
  );
};

export default BottomNav;
