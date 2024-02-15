import {
  createReviewService,
  deleteReviewService,
  getReviewByIdService,
  getReviewByUserIdService,
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

  const getReviewById = async (id: string) => {
    const response = await getReviewByIdService(id);

    if (!response) {
      return { error: "Error" };
    }

    return response;
  };

  const getReviewByUserId = async (id: string) => {
    const response = await getReviewByUserIdService(id);

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
  return {
    getReviews,
    getReviewById,
    getReviewByUserId,
    createReview,
    deleteReview,
  };
};
