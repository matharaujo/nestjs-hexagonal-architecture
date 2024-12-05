import { Movie } from 'src/modules/movie/domain/movie';

export abstract class MoviePersistencePort {
  public abstract save(movie: Movie): Promise<Movie>;
  public abstract findAll(): Promise<Movie[]>;
  public abstract findOneById(id: number): Promise<Movie>;
  public abstract updateById(id: number, movie: Movie): Promise<Movie>;
}
