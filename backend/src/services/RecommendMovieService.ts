import prismaClient from "../prisma";

class RecommendMovieService {
    async execute() {
        const movie = await prismaClient.movie.findFirst({
            where: {
                rating: null
            }
        });

        if (!movie) {
            throw new Error("Nenhum filme não avaliado encontrado!");
        }

        return movie;
    }
}

export { RecommendMovieService };
