import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import PostItem from './PostItem';
import axios from 'axios';
import '../styles/PostsList.css';

export default function PostsList() {
  const [posts, setPosts] = useState([]);
  const [compUncliced, setCompUncliced] = useState(true);
  const { user } = useSelector((state) => state);
  const propsClicked = !compUncliced ? { pointerEvents: 'none' } : {};

  const deleteHandler = (id) => {
    setCompUncliced(true);
    setPosts((prev) => {
      return prev.filter((post) => post._id !== id);
    });
    axios.delete(`http://localhost:3000/post/${id}`);
  };

  useEffect(() => {
    if (user)
      axios
        .get('http://localhost:3000/post', {
          params: {
            creatorId: user.uuid,
          },
        })
        .then((res) => setPosts(res.data))
        .catch((err) => console.log(err));
  }, [user]);

  return (
    <div className="post-list">
      <h1 className="post-list__header">Pastes</h1>
      {posts.length ? (
        posts?.map((post) => (
          <PostItem key={post._id} propsClicked={propsClicked} setCompUncliced={setCompUncliced} deleteHandler={deleteHandler} post={post} />
        ))
      ) : (
        <h2 style={{ color: 'yellowgreen' }}>no paste yet</h2>
      )}
    </div>
  );
}
