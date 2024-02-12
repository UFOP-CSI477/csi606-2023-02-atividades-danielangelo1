import { FastifyReply, FastifyRequest } from "fastify";
import { CreateReviewService } from "../../services/reviews/CreateReviewService";

class CreateReviewController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { game_id, user_id, review, rating } = request.body as {
      game_id: string;
      user_id: string;
      review: string;
      rating: number;
    };

    const reviewService = new CreateReviewService();
    const gameReview = reviewService.handle({
      game_id,
      user_id,
      review,
      rating,
    });

    reply.send(gameReview);
  }
}

export { CreateReviewController };
