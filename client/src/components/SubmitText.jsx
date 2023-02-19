import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import { updatePost, addPost } from '../hooks/customHooks';
import '../styles/SubmitText.css';

export default function SubmitText() {
  const navigate = useNavigate();
  const location = useLocation();
  const editState = location.state?.edit || false;
  const post = location.state?.post || null;
  const { user } = useSelector((state) => state);
  const { isLogedIn } = useSelector((state) => state);
  const [title, setTitle] = useState(post?.title || '');
  const [text, setText] = useState(post?.text || '');
  const [password, setPassword] = useState(post?.password || '');
  const [titlePopup, setTitlePopup] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = { ...post, title, text, password };
      if (editState) {
        const response = await updatePost(post._id, data);
        const fileUrl = response.data;
        localStorage.setItem('lastPost', fileUrl);
      } else {
        if (isLogedIn) data.creatorId = user.uuid;
        const response = await addPost(data);
        const { fileUrl } = response.data;
        localStorage.setItem('lastPost', fileUrl);
      }
      setPassword('');
      setTitle('');
      setText('');
      navigate('/successMessage');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="submit-form">
      <form onSubmit={handleSubmit}>
        <label className="submit-label">
          Title:
          <input
            className="submit-input"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            onFocus={() => setTitlePopup(true)}
            onBlur={() => setTitlePopup(false)}
          />
          {titlePopup && <div className="title-popup">Enter a brief description about the paste</div>}
        </label>
        <br />
        <label className="submit-label">
          Text:
          <textarea className="submit-textarea" value={text} onChange={(e) => setText(e.target.value)} />
        </label>
        <br />
        <label className="submit-label">
          Password to view?
          <input className="submit-input" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <button className="submit-button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
