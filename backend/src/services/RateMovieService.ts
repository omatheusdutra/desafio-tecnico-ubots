import prismaClient from "../prisma";

interface RateMovieProps {
    id: string;
    rating: number;
}

class RateMovieService {
    async execute({ id, rating }: RateMovieProps) {
        if (!id || rating == null) {
            throw new Error("Preencha todos os campos");
        }

        const movie = await prismaClient.movie.update({
            where: { id },
            data: { rating }
        });

        return movie;
    }
}

export { RateMovieService };
