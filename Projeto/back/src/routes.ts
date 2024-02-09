import fastify, { FastifyReply, FastifyRequest } from "fastify";
import { FastifyInstance, FastifyPluginOptions } from "fastify";

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
}
