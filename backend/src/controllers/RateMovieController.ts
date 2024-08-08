import { FastifyRequest, FastifyReply } from "fastify";
import { RateMovieService } from '../services/RateMovieService';

class RateMovieController {
    async handle(request: FastifyRequest, reply: FastifyReply) {
        const { id, rating } = request.body as { id: string, rating: number };

        const movieService = new RateMovieService();
        const movie = await movieService.execute({ id, rating });

        reply.send(movie);
    }
}

export { RateMovieController };
