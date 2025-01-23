import React from 'react';

const LikeButton = ({ liked, toggleLike }) => {
  return (
    <button
      onClick={toggleLike}
      style={{
        backgroundColor: liked ? 'red' : '#333333',  
        color: liked ? 'black' : 'white', 
        padding: '5px 10px',
        borderRadius: '5px',
        border: '1px solid #ccc',
      }}
    >
      {liked ? 'Liked' : 'Like'}
    </button>
  );
};

export default LikeButton;
