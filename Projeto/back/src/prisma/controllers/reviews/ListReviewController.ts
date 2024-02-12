import { FastifyReply, FastifyRequest } from "fastify";
import { ListReviewService } from "../../services/reviews/ListReviewService";

class ListReviewController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const listReviewServide = new ListReviewService();

    const reviews = await listReviewServide.handle();

    reply.send(reviews);
  }
}

export { ListReviewController };
