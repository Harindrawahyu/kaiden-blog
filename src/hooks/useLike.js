import { useState } from "react";

export default function useLike(initialLike = false, initialLikesCount = 0) {
  const [isLike, setIsLike] = useState(initialLike);
  const [isLikeCount, setIsLikeCount] = useState(initialLikesCount);

  const handleLikeToggle = () => {
    if (isLike) {
      setIsLike(false);
      setIsLikeCount((prev) => prev - 1);
    } else {
      setIsLike(true);
      setIsLikeCount((prev) => prev + 1);
    }
  };

  return { isLike, isLikeCount, handleLikeToggle };
}
