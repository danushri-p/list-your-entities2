import React from 'react';
import LikeButton from './likebutton';

const PostCard = ({ post }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px 0', borderRadius: '8px' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img
          src={post.profileImage} // Ensure this is correctly used
          alt={post.username}
          style={{ width: '40px', height: '40px', borderRadius: '50%', marginRight: '10px' }}
        />
        <h3>{post.username}</h3>
      </div>
      <p>{post.content}</p>
      <LikeButton /> {/* Display the LikeButton */}
    </div>
  );
};

export default PostCard;
