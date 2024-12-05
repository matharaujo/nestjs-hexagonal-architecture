import { Movie } from 'src/modules/movie/domain/movie';

export abstract class FindAllMoviesUseCase {
  public abstract findAllMovies(): Promise<Movie[]>;
}
