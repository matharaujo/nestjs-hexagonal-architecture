import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

import { Movie } from '../../domain/movie';
import { MovieMapper } from './movie-mapper';
import { MovieEntity } from './movie-entity';
import { MoviePersistencePort } from '../../application/ports/output/movie-persistence.port';

@Injectable()
export class MoviePersistenceAdapter implements MoviePersistencePort {
  constructor(private movieMapper: MovieMapper) {}

  public async save(movie: Movie): Promise<Movie> {
    const movieEntity: MovieEntity = this.movieMapper.toEntity(movie);

    return movieEntity.save();
  }

  public async findAll(): Promise<Movie[]> {
    const movieEntities: MovieEntity[] = await MovieEntity.findAll();

    return movieEntities.map((entity) => this.movieMapper.toDomain(entity));
  }

  public async findOneById(id: number): Promise<Movie> {
    const movieEntity: MovieEntity = await MovieEntity.findByPk(id);

    if (!movieEntity) {
      throw new HttpException('Movie not found!', HttpStatus.NOT_FOUND);
    }

    return this.movieMapper.toDomain(movieEntity);
  }

  public async updateById(id: number, movie: Movie): Promise<Movie> {
    const movieEntity: MovieEntity = await MovieEntity.findByPk(id);

    if (!movieEntity) {
      throw new HttpException('Movie not found!', HttpStatus.NOT_FOUND);
    }

    movieEntity.name = movie.name;
    movieEntity.genre = movie.genre;
    movieEntity.studio = movie.studio;
    movieEntity.director = movie.director;
    movieEntity.rate = movie.rate;

    return movieEntity.save();
  }
}
