import { FastifyReply, FastifyRequest } from "fastify";
import { DeleteGameService } from "../../services/games/DeleteGameService";

class DeleteGameController{
  async delete(request: FastifyRequest, reply: FastifyReply) {
    const {id} = request.params as {
      id: string;
    } 

    const gameService = new DeleteGameService();
    const game = await gameService.handle({id});

    reply.send(game);
  }

}

export { DeleteGameController}