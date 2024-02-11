import { FastifyReply, FastifyRequest } from "fastify";
import { ListGameService } from "../../services/games/ListGameService";

class ListGameController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const listGameService = new ListGameService();

    const games = await listGameService.handle();

    reply.send(games);
  }
}

export { ListGameController };
