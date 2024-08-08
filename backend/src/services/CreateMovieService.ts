import prismaClient from "../prisma";

interface CreateMovieProps {
    title: string;
    director: string;
    releaseDate: string;
}

class CreateMovieService {
    async execute({ title, director, releaseDate }: CreateMovieProps) {
        if (!title || !director || !releaseDate) {
            throw new Error("Preencha todos os campos");
        }

        const movie = await prismaClient.movie.create({
            data: {
                title,
                director,
                releaseDate,
                status: true
            }
        });

        return movie;
    }
}

export { CreateMovieService };
