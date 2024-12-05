import { Movie } from 'src/modules/movie/domain/movie';
import { SaveMovieCommand } from './save-movie.command';

export abstract class SaveMovieUseCase {
  public abstract saveMovie(command: SaveMovieCommand): Promise<Movie>;
}
