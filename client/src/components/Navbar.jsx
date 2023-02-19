import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import IsLogIn from './IsLogIn';
import LogInButton from './LogInButton';
import CreateAccountButton from './CreateAccountButton';
import '../styles/Navbar.css';

const BottomNav = () => {
  const [selected, setSelected] = React.useState('');
  const { isLogedIn } = useSelector((state) => state);

  const logInMessage = <IsLogIn />;
  return (
    <div className="bottom-nav d-flex justify-content-start align-items-center">
      {isLogedIn ? (
        logInMessage
      ) : (
        <div className='button-box'>
          <LogInButton setSelected={setSelected} selected={selected} />
          <CreateAccountButton setSelected={setSelected} selected={selected} />
        </div>
      )}
    </div>
  );
};

export default BottomNav;
