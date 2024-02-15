import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useReview } from "../../hooks/useReview";
import { Review } from "../../types/Review";
import { formatDate } from "../../utils/FormatDate";
import DeleteReviewButton from "../../components/deleteReviewButton/DeleteReviewButton";
import { Game } from "../../types/Game";
import { useGame } from "../../hooks/useGame";

const Reviews = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState<Review[]>([]);
  const { getReviewByUserId } = useReview();
  const { getGameById } = useGame();
  const [games, setGames] = useState<{ [key: string]: Game }>({});

  useEffect(() => {
    const fetchReviewAndGame = async () => {
      const reviewResponse = await getReviewByUserId(id as string);
      setReviews(reviewResponse);

      const uniqueGameIds = [
        ...new Set(reviewResponse.map((review) => review.game_id)),
      ];
      const gamesResponses = await Promise.all(
        uniqueGameIds.map((gameId) => getGameById(gameId)),
      );

      const gamesMap = gamesResponses.reduce((acc, game) => {
        acc[game.id] = game;
        return acc;
      }, {});
      setGames(gamesMap);
    };

    fetchReviewAndGame();
  }, []);

  const fetchReview = async () => {
    const response = await getReviewByUserId(id as string);
    setReviews(response);
  };

  const handleDeleteSuccess = () => {
    alert("Avaliação deletada com sucesso!");
    fetchReview();
  };

  return (
    <>
      <div className="review-container">
        {reviews.length > 0 ? (
          reviews.map((review) => (
            <div key={review.id} className="game-review-card">
              <h2>{games[review.game_id]?.name}</h2>
              <p>{review.review}</p>
              <p>Nota: {review.rating} estrelas</p>
              <p>Data da Avaliação: {formatDate(review.created_at)}</p>
              <p>Última modificação: {formatDate(review.updated_at)}</p>
              <DeleteReviewButton
                id={review.id}
                onDeleteSuccess={handleDeleteSuccess}
              />
            </div>
          ))
        ) : (
          <p>Nenhuma avaliação cadastrada</p>
        )}
      </div>
    </>
  );
};

export default Reviews;
