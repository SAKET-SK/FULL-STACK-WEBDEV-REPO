import React, { useState } from 'react';

function LikeButton() {
  // State to track whether the button is liked or not
  const [liked, setLiked] = useState(false);

  // State to track the total number of likes
  const [totalLikes, setTotalLikes] = useState(0);

  // Function to handle the like button click
  const handleLikeClick = () => {
    setLiked(prevLiked => {
      if (!prevLiked) {
        // If the button was not liked before, increment the total likes
        setTotalLikes(prevTotal => prevTotal + 1);
      } else {
        // If the button was liked before, decrement the total likes
        setTotalLikes(prevTotal => prevTotal - 1);
      }
      // Toggle the liked state
      return !prevLiked;
    });
  };

  return (
    <div>
      <button onClick={handleLikeClick}>
        {liked ? 'Liked' : 'Not Liked'}
      </button>
      <p>Total Likes: {totalLikes}</p>
    </div>
  );
}

export default LikeButton;
