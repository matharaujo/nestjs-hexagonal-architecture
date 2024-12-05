import { Injectable } from '@nestjs/common';

import { MoviePersistencePort } from '../ports/output/movie-persistence.port';
import { Movie } from '../../domain/movie';

@Injectable()
export class FindMovieByIdService implements FindMovieByIdService {
  constructor(private moviePersistencePort: MoviePersistencePort) {}

  public async findMovieById(id: number): Promise<Movie> {
    return this.moviePersistencePort.findOneById(id);
  }
}
