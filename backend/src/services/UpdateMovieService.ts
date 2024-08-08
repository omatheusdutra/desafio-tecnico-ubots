import prismaClient from "../prisma";

interface UpdateMovieProps {
    id: string;
    title?: string;
    director?: string;
    releaseDate?: string;
}

class UpdateMovieService {
    async execute({ id, title, director, releaseDate }: UpdateMovieProps) {
        if (!id) {
            throw new Error("Solicitação inválida!");
        }

        const movie = await prismaClient.movie.update({
            where: { id },
            data: {
                title,
                director,
                releaseDate
            }
        });

        return movie;
    }
}

export { UpdateMovieService };
