import { FastifyReply, FastifyRequest } from "fastify";
import { DeleteGameService } from "../../services/games/DeleteGameService";
import { DeleteReviewService } from "../../services/reviews/DeleteReviewService";

class DeleteReviewController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { id } = request.params as {
      id: string;
    };

    const reviewService = new DeleteReviewService();
    const review = await reviewService.handle({ id });

    reply.send(review);
  }
}

export { DeleteReviewController };
