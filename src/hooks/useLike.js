import { useState } from "react";

export default function useLike(initialLiked = false, likesCount = 0) {
  const [isLiked, setIsLiked] = useState(initialLiked);

  // 1. Create liked state (boolean)
  const handleUnlikedCount = (likesCount) => {
    setIsLiked((prevCount) => prevCount - likesCount);
  };

  // 2. Create likeCount state (number)
  const handleLikedCount = (likesCount) => {
    setIsLiked((prevCount) => prevCount + likesCount);
  };

  // 3. Function to toggle like
  const handleLikedToggle = () => {
    setIsLiked(!isLiked);
  };

  return { isLiked, handleLikedCount, handleLikedToggle, handleUnlikedCount };
}
