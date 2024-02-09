import fastify, { FastifyReply, FastifyRequest } from "fastify";
import { FastifyInstance, FastifyPluginOptions } from "fastify";
import { CreateGameController } from "./prisma/controllers/CreateGameController";

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
}
