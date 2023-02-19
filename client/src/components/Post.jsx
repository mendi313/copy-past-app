import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import PopUpQes from './PopUpQes';
import { getPost, deletePost } from '../hooks/customHooks';
import '../styles/Post.css';

function Post() {
  const location = useLocation();
  const navigate = useNavigate();
  const [post, setPost] = useState(location.state?.post || {});
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const lastPostId = localStorage.getItem('lastPost');
    if (!Object.keys(post).length && lastPostId) {
      getPost(lastPostId)
        .then((res) => {
          setPost(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);
  const handlPopUp = (answ) => {
    setShowModal(answ);
  };

  const deleteHandler = () => {
    setShowModal(false);
    deletePost(post._id)
      .then(() => {
        navigate('/');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      {!showModal ? (
        <div className="post-container d-flex justify-content-center align-items-center">
          <div className="post-content text-center">
            <h2 className="post-title">{post.title}</h2>
            <p className="post-text">{post.text}</p>
            <div className="button-container">
              <Link to="/" state={{ post: post, edit: true }}>
                <button className="edit-button">Edit</button>
              </Link>
              <Link to="/previw" state={{ post }}>
                <button className="fullScreen-button">full screen</button>
              </Link>
              <button className="delete-button" onClick={() => handlPopUp(true)}>
                Delete
              </button>
            </div>
          </div>
        </div>
      ) : (
        <PopUpQes handlPopUp={handlPopUp} deletePost={deleteHandler} />
      )}
    </div>
  );
}

export default Post;
