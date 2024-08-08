import { FastifyRequest, FastifyReply } from "fastify";
import { UpdateMovieService } from '../services/UpdateMovieService';

class UpdateMovieController {
    async handle(request: FastifyRequest, reply: FastifyReply) {
        const { id, title, director, releaseDate } = request.body as { id: string, title: string, director: string, releaseDate: string };

        const movieService = new UpdateMovieService();
        const movie = await movieService.execute({ id, title, director, releaseDate });

        reply.send(movie);
    }
}

export { UpdateMovieController };
