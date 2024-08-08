import { FastifyRequest, FastifyReply } from "fastify";
import { CreateMovieService } from '../services/CreateMovieService';

class CreateMovieController {
    async handle(request: FastifyRequest, reply: FastifyReply) {
        const { title, director, releaseDate } = request.body as { title: string, director: string, releaseDate: string };

        const movieService = new CreateMovieService();
        const movie = await movieService.execute({ title, director, releaseDate });

        reply.send(movie);
    }
}

export { CreateMovieController };

