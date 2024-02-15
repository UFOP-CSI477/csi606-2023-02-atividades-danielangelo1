import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useReview } from "../../hooks/useReview";
import { Review } from "../../types/Review";
import { formatDate } from "../../utils/FormatDate";
import { useGame } from "../../hooks/useGame";
import { Game } from "../../types/Game";

const GamePage = () => {
  const { id } = useParams();
  const [review, setReview] = useState<Review[]>([]);
  const [game, setGame] = useState<Game>();
  const { getReviewById } = useReview();
  const { getGameById } = useGame();

  useEffect(() => {
    const fetchReview = async () => {
      const response = await getReviewById(id as string);
      setReview(response);
    };

    const fetchGame = async () => {
      const response = await getGameById(id as string);
      setGame(response);
    };

    fetchReview();
    fetchGame();
  }, []);

  return (
    <>
      <h2> Avaliações do {game?.name}</h2>
      {review.map((review) => (
        <div key={review.id}>
          <p>{review.review}</p>
          <p>{review.rating}</p>
          <p>{formatDate(review.created_at)}</p>
        </div>
      ))}
    </>
  );
};

export default GamePage;
