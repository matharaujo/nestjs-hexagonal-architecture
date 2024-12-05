import { Injectable } from '@nestjs/common';

import { FindAllMoviesUseCase } from '../ports/input/find-all-movies.use-case';
import { MoviePersistencePort } from '../ports/output/movie-persistence.port';
import { Movie } from '../../domain/movie';

@Injectable()
export class FindAllMoviesService implements FindAllMoviesUseCase {
  constructor(private moviePersistencePort: MoviePersistencePort) {}

  public async findAllMovies(): Promise<Movie[]> {
    return this.moviePersistencePort.findAll();
  }
}
