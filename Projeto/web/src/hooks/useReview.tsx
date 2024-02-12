import {
  createReviewService,
  deleteReviewService,
  getReviewService,
} from "../services/ReviewService";
import { Review } from "../types/Review";

export const useReview = () => {
  const getReviews = async () => {
    const response = await getReviewService();

    if (!response) {
      return { error: "Error" };
    }
    return response;
  };

  const createReview = async (review: Review) => {
    const response = await createReviewService(review);

    if (!response) {
      return { error: "Error" };
    }
    return response;
  };

  const deleteReview = async (id: string) => {
    const response = await deleteReviewService(id);

    if (!response) {
      return { error: "Error" };
    }
  };
  return { getReviews, createReview, deleteReview };
};
