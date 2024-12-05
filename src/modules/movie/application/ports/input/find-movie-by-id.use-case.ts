import { Movie } from 'src/modules/movie/domain/movie';

export abstract class FindMovieByIdUseCase {
  public abstract findMovieById(id: number): Promise<Movie>;
}
