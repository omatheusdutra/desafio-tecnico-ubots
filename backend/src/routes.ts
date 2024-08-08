import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify";
import { CreateMovieController } from './controllers/CreateMovieController';
import { ListMoviesController } from './controllers/ListMoviesController';
import { DeleteMovieController } from './controllers/DeleteMovieController';
import { UpdateMovieController } from './controllers/UpdateMovieController';
import { RateMovieController } from './controllers/RateMovieController';
import { RecommendMovieController } from './controllers/RecommendMovieController';

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {

    fastify.get("/teste", async (request: FastifyRequest, reply: FastifyReply) => {
        return { ok: true };
    });

    fastify.post("/movie", async (request: FastifyRequest, reply: FastifyReply) => {
        return new CreateMovieController().handle(request, reply);
    });

    fastify.put("/movie", async (request: FastifyRequest, reply: FastifyReply) => {
        return new UpdateMovieController().handle(request, reply);
    });

    fastify.get("/movies", async (request: FastifyRequest, reply: FastifyReply) => {
        return new ListMoviesController().handle(request, reply);
    });

    fastify.delete("/movie", async (request: FastifyRequest, reply: FastifyReply) => {
        return new DeleteMovieController().handle(request, reply);
    });

    fastify.post("/movie/rate", async (request: FastifyRequest, reply: FastifyReply) => {
        return new RateMovieController().handle(request, reply);
    });

    fastify.get("/movie/recommend", async (request: FastifyRequest, reply: FastifyReply) => {
        return new RecommendMovieController().handle(request, reply);
    });
}
