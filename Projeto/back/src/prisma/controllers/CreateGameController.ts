import { FastifyReply, FastifyRequest } from "fastify";
import { CreateGameService } from "../services/CreateGameService";

class CreateGameController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { name, genre, year, publisher } = request.body as {
      name: string;
      genre: string;
      year: string;
      publisher: string;
    };

    const gameService = new CreateGameService();
    const game = await gameService.handle({ name, genre, year, publisher });

    reply.send(game);
  }
}

export { CreateGameController };
