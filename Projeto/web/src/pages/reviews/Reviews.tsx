import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useReview } from "../../hooks/useReview";
import { Review } from "../../types/Review";
import { formatDate } from "../../utils/FormatDate";
import DeleteReviewButton from "../../components/deleteReviewButton/DeleteReviewButton";

const Reviews = () => {
  const { id } = useParams();
  const [review, setReview] = useState<Review[]>([]);
  const { getReviewById } = useReview();

  useEffect(() => {
    const fetchReview = async () => {
      const response = await getReviewById(id as string);
      setReview(response);
    };
    fetchReview();
  }, []);
  return (
    <>
      <div className="review-container">
        {review.map((review) => (
          <div key={review.id} className="game-review-card">
            <p>{review.review}</p>
            <p>Nota: {review.rating} estrelas</p>
            <p>Data da Avaliação: {formatDate(review.created_at)}</p>
            <DeleteReviewButton id={review.id} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Reviews;
