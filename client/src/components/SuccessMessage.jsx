import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/SuccessMessage.css';

function SuccessMessage() {
  const navigate = useNavigate();
  const lastPost = localStorage.getItem('lastPost');
  const [post, setPost] = useState({});
  const [password, setPassword] = useState('');

  const [inputText, setInputText] = useState(
    `https://localHost.com/${lastPost}`
  );
  useEffect(() => {
    const lastPostId = localStorage.getItem('lastPost');
    if (lastPostId) {
      axios
        .get(`http://localhost:3000/post/${lastPostId}`)
        .then((res) => {
          setPost(res.data);
        })
        .catch((err) => {
          console.log(22, err);
        });
    }
  }, []);

  const handleClick = () => {
    navigate('/post');
  };
  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (password === post.password) {
      navigate('/post');
    }
  };

  return (
    <div className="post-container">
      {post.password ? (
        <form className="form-container" onSubmit={handlePasswordSubmit}>
          <label>
            Password:
            <input
              className="password-input"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button className="submit-button" type="submit">
            Submit
          </button>
        </form>
      ) : (
        <>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              backgroundColor: '#f9f9f9',
              padding: '20px',
              borderRadius: '5px',
            }}
          >
            <p style={{ color: 'green', fontSize: '18px' }}>
              Successfully pasted
            </p>
            <input
              type="text"
              value={inputText}
              readOnly
              onClick={handleClick}
              style={{
                width: '80%',
                padding: '10px',
                fontSize: '16px',
                borderRadius: '5px',
                cursor: 'pointer',
                border: '1px solid #ccc',
              }}
              onChange={(e) => setInputText(e.target.value)}
            />
            <button
              style={{
                color: 'green',
                padding: '10px 20px',
                borderRadius: '5px',
                fontSize: '16px',
                border: 'none',
                marginTop: '10px',
              }}
              onClick={handleClick}
            >
              Click Me To Watch
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default SuccessMessage;
