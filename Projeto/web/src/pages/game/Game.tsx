import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useReview } from "../../hooks/useReview";
import { Review } from "../../types/Review";
import { formatDate } from "../../utils/FormatDate";
import { useGame } from "../../hooks/useGame";
import { Game } from "../../types/Game";
import "./Game.css";

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
      <div className="review-container">
        {review.map((review) => (
          <div key={review.id} className="game-review-card">
            <p>{review.review}</p>
            <p>Nota: {review.rating} estrelas</p>
            <p>Data da Avaliação: {formatDate(review.created_at)}</p>
          </div>
        ))}
      </div>
      {review.length === 0 && <p>Nenhuma avaliação cadastrada</p>}
    </>
  );
};

export default GamePage;
