import { FastifyRequest, FastifyReply } from "fastify";
import { RecommendMovieService } from '../services/RecommendMovieService';

class RecommendMovieController {
    async handle(request: FastifyRequest, reply: FastifyReply) {
        const recommendMovieService = new RecommendMovieService();
        const movie = await recommendMovieService.execute();
        reply.send(movie);
    }
}

export { RecommendMovieController };
