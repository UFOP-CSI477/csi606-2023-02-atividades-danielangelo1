import { FastifyReply, FastifyRequest } from "fastify";
import { DeleteGameService } from "../services/DeleteGameService";

class DeleteGameController{
  async delete(request: FastifyRequest, reply: FastifyReply) {
    const {id} = request.params as {
      id: string;
    } 

    const gameService = new DeleteGameService();
    const game = await gameService.delete({id});

    reply.send(game);
  }

}

export { DeleteGameController}