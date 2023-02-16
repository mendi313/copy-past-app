import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const BottomNav = ({ selected, setSelected }) => {
  return (
    <div>
      <Link to="/createAccount" >
        <Button variant="light" onClick={() => setSelected('create')} className={selected === 'create' ? 'active' : ''}>
          Create Account
        </Button>
      </Link>
    </div>
  );
};

export default BottomNav;
