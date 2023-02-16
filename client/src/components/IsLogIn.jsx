import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setLogedOutUser } from '../data/reducer';
import { setLogout } from '../hooks/customHooks';
import '../styles/IsLogIn.css';

export default function IsLogIn() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state);
  const [showPopup, setShowPopup] = useState(false);

  const handleMouseEnter = () => {
    setShowPopup(true);
  };

  const handleMouseLeave = () => {
    setShowPopup(false);
  };
  const handleLogOut = () => {
    dispatch(setLogedOutUser());
    setLogout();
    navigate('/');
  };

  return (
    <div
      className="button-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button className="my-button">
        You Are Logged In As {user.username}
      </button>
      {showPopup && (
        <div className="options-popup">
          <div className="options-container">
            <Link to="/PostsList">
              <button className="option-button">My Pastes</button>
            </Link>
            <hr className="line-separator" />
            <button onClick={handleLogOut} className="option-button">
              Log Out
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
