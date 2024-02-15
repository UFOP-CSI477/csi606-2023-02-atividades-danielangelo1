import { FastifyReply, FastifyRequest } from "fastify";
import { ListGameService } from "../../services/games/ListGameService";

class ListGameController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const listGameService = new ListGameService();

    const games = await listGameService.handle();

    reply.send(games);
  }

  async handleByGameId(request: FastifyRequest, reply: FastifyReply) {
    const { id } = request.params as any;

    const listGameService = new ListGameService();

    const game = await listGameService.handleByGameId(id);

    reply.send(game);
  }
}

export { ListGameController };
