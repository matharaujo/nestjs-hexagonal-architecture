import { Movie } from 'src/modules/movie/domain/movie';
import { UpdateMovieByIdCommand } from './update-movie-by-id.command';

export abstract class UpdateMovieByIdUseCase {
  public abstract updateMovieById(
    id: number,
    command: UpdateMovieByIdCommand,
  ): Promise<Movie>;
}
