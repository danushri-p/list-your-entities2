import React, { useState } from 'react';

const LikeButton = () => {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <button
      onClick={toggleLike}
      style={{
        backgroundColor: liked ? 'red' : 'gray', 
        color: 'white',
        padding: '5px 10px',
        borderRadius: '5px',
        border: 'none',
      }}
    >
      {liked ? 'Liked' : 'Like'}
    </button>
  );
};

export default LikeButton;
