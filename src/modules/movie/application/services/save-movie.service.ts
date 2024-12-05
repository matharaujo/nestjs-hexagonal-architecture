import { Injectable } from '@nestjs/common';

import { SaveMovieUseCase } from '../ports/input/save-movie.use-case';
import { MoviePersistencePort } from '../ports/output/movie-persistence.port';
import { SaveMovieCommand } from '../ports/input/save-movie.command';
import { Movie } from '../../domain/movie';

@Injectable()
export class SaveMovieService implements SaveMovieUseCase {
  constructor(private moviePersistencePort: MoviePersistencePort) {}

  public async saveMovie(command: SaveMovieCommand): Promise<Movie> {
    const movie: Movie = {
      name: command.name,
      genre: command.genre,
      studio: command.studio,
      director: command.director,
      rate: command.rate,
    };

    return this.moviePersistencePort.save(movie);
  }
}
