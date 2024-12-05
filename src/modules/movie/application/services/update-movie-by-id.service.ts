import { Injectable } from '@nestjs/common';

import { UpdateMovieByIdUseCase } from '../ports/input/update-movie-by-id.use-case';
import { MoviePersistencePort } from '../ports/output/movie-persistence.port';
import { UpdateMovieByIdCommand } from '../ports/input/update-movie-by-id.command';
import { Movie } from '../../domain/movie';

@Injectable()
export class UpdateMovieByIdService implements UpdateMovieByIdUseCase {
  constructor(private moviePersistencePort: MoviePersistencePort) {}

  public async updateMovieById(
    id: number,
    command: UpdateMovieByIdCommand,
  ): Promise<Movie> {
    const movie: Movie = {
      name: command.name,
      genre: command.genre,
      studio: command.studio,
      director: command.director,
      rate: command.rate,
    };

    return this.moviePersistencePort.updateById(id, movie);
  }
}
