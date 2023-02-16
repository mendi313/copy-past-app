import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import PopUpQes from './PopUpQes';
import '../styles/PostsList.css';

function PostItem({ post, deleteHandler, setCompUncliced, propsClicked }) {
  const [showModal, setShowModal] = useState(false);
  const formatDate = new Date(post.created_at).toLocaleDateString('en-us', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  const handlPopUp = (answ) => {
    setShowModal(answ);
    setCompUncliced(!answ);
  };
  const handleDelete = () => {
    deleteHandler(post._id);
  };
  return (
    <div className="post-item">
      <div className="post-item" style={propsClicked}>
        <div className="post-item__column post-item__column--paste">
          <Link to="/post" state={{ post: post }}>
            <button
              style={{ textDecoration: 'none' }}
              className="post-item__link"
            >
              localhost:5173/Post/{post.url}
            </button>
          </Link>
        </div>
        <div className="post-item__column post-item__column--date">
          {formatDate}
        </div>
        <div className="post-item__column post-item__column--details">
          <Link to="/" state={{ post: post, edit: true }}>
            <button className="post-item__button post-item__button--edit">
              Edit
            </button>
          </Link>
          <Link to="/previw" state={{ post }}>
            <button className="post-item__button post-item__button--edit">
              fullScreen-{'>'}
            </button>
          </Link>
          <button
            onClick={() => handlPopUp(true)}
            className="post-item__button post-item__button--delete"
          >
            Delete
          </button>
        </div>
      </div>
      {showModal && (
        <PopUpQes handlPopUp={handlPopUp} deletePost={handleDelete} />
      )}
    </div>
  );
}

export default PostItem;
