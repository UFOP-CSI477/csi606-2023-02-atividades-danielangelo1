import fastify, { FastifyReply, FastifyRequest } from "fastify";
import { FastifyInstance, FastifyPluginOptions } from "fastify";
import { CreateGameController } from "./prisma/controllers/games/CreateGameController";
import { DeleteGameController } from "./prisma/controllers/games/DeleteGameController";
import { ListGameController } from "./prisma/controllers/games/ListGameController";
import { CreateReviewController } from "./prisma/controllers/reviews/CreateReviewController";
import { DeleteReviewController } from "./prisma/controllers/reviews/DeleteReviewController";
import { ListReviewController } from "./prisma/controllers/reviews/ListReviewController";

export async function routes(
  fastify: FastifyInstance,
  options: FastifyPluginOptions,
) {
  // Rotas Games
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
    "/game/:id",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new ListGameController().handleByGameId(request, reply);
    },
  );

  fastify.get(
    "/games",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new ListGameController().handle(request, reply);
    },
  );

  // Rotas Reviews
  fastify.post(
    "/review",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new CreateReviewController().handle(request, reply);
    },
  );

  fastify.delete(
    "/review/:id",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new DeleteReviewController().handle(request, reply);
    },
  );

  fastify.get(
    "/reviews",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new ListReviewController().handle(request, reply);
    },
  );

  fastify.get(
    "/reviews/:id",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new ListReviewController().handleByGameId(request, reply);
    },
  );
}
