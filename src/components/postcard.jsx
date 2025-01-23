import React, { useState } from 'react';
import LikeButton from './likebutton';

const PostCard = ({ post }) => {
  const [liked, setLiked] = useState(post.isLiked); 

  const toggleLike = () => {
    setLiked(!liked);
  };

  
  const boxStyles = [
    { backgroundColor: '#FAF9F6', border: '2px solid#FAF9F6' },
    { backgroundColor: '#FAF9F6', border: '2px solid#FAF9F6' }, 
    { backgroundColor: '#FAF9F6', border: '2px solid#FAF9F6' }, 
  ];

  const postStyle = boxStyles[post.id % boxStyles.length];

  return (
    <div
      style={{
        padding: '15px',
        margin: '15px 0',
        borderRadius: '8px',
        color: 'black',
        boxShadow: '2px 2px 10px rgba(0, 0, 0, 0.1)', 
        ...postStyle,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img
          src={post.profileImage}
          alt={post.username}
          style={{ width: '50px', height: '50px', borderRadius: '50%', marginRight: '10px' }}
        />
        <h3>{post.username}</h3>
      </div>
      <p>{post.content}</p>
      <LikeButton liked={liked} toggleLike={toggleLike} />
    </div>
  );
};

export default PostCard;
