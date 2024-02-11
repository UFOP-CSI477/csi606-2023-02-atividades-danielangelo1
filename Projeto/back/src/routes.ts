import fastify, { FastifyReply, FastifyRequest } from "fastify";
import { FastifyInstance, FastifyPluginOptions } from "fastify";
import { CreateGameController } from "./prisma/controllers/games/CreateGameController";
import { DeleteGameController } from "./prisma/controllers/games/DeleteGameController";
import { ListGameController } from "./prisma/controllers/games/ListGameController";

export async function routes(
  fastify: FastifyInstance,
  options: FastifyPluginOptions,
) {
  fastify.get(
    "/teste",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return { ok: true };
    },
  );

  fastify.post(
    "/game",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new CreateGameController().handle(request, reply);
    },
  );

  fastify.delete(
    "/game/:id",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new DeleteGameController().delete(request, reply);
    },
  );

  fastify.get(
    "/games",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new ListGameController().handle(request, reply);
    },
  );
}
