import { Review } from "../types/Review";
import { api } from "./api";

const enum Endpoints {
  geral = "/review",
}

export const createReviewService = async (review: Review) => {
  try {
    const response = await api.post(Endpoints.geral, review);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getReviewService = async () => {
  try {
    const response = await api.get(Endpoints.geral);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const deleteReviewService = async (id: string) => {
  try {
    const response = await api.delete(`${Endpoints.geral}/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
