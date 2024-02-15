import { FastifyReply, FastifyRequest } from "fastify";
import { ListReviewService } from "../../services/reviews/ListReviewService";

class ListReviewController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const listReviewServide = new ListReviewService();

    const reviews = await listReviewServide.handle();

    reply.send(reviews);
  }

  async handleByGameId(request: FastifyRequest, reply: FastifyReply) {
    const { id } = request.params as any;

    const listReviewServide = new ListReviewService();

    const reviews = await listReviewServide.handleByGameId(id);

    reply.send(reviews);
  }

  async handleByUserId(request: FastifyRequest, reply: FastifyReply) {
    const { id } = request.params as any;

    const listReviewServide = new ListReviewService();

    const reviews = await listReviewServide.handleByUserId(id);

    reply.send(reviews);
  }
}

export { ListReviewController };
