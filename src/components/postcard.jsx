import React, { useState } from 'react';
import LikeButton from './likebutton';

const PostCard = ({ post }) => {
  const [liked, setLiked] = useState(post.isLiked); 

  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <div
      style={{
        border: '1px solid #ccc',
        padding: '10px',
        margin: '10px 0',
        borderRadius: '8px',
        backgroundColor: liked ? '#f0f0f0' : '#f0f0f0', 
        color: 'black', 
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img
          src={post.profileImage}
          alt={post.username}
          style={{ width: '40px', height: '40px', borderRadius: '50%', marginRight: '10px' }}
        />
        <h3>{post.username}</h3>
      </div>
      <p>{post.content}</p>
      <LikeButton liked={liked} toggleLike={toggleLike} /> {}
    </div>
  );
};

export default PostCard;
