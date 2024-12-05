import { Injectable } from '@nestjs/common';

import { Movie } from '../../domain/movie';
import { MovieEntity } from './movie-entity';

@Injectable()
export class MovieMapper {
  public toEntity(movie: Movie): MovieEntity {
    return MovieEntity.build({
      name: movie.name,
      genre: movie.genre,
      studio: movie.studio,
      director: movie.director,
      rate: movie.rate,
    });
  }

  public toDomain(entity: MovieEntity): Movie {
    return new Movie(
      entity.name,
      entity.genre,
      entity.studio,
      entity.director,
      entity.rate,
      entity.id,
      entity.createdAt,
      entity.updatedAt,
    );
  }
}
