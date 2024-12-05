import { Controller, Get } from '@nestjs/common';

import { FindAllMoviesUseCase } from 'src/modules/movie/application/ports/input/find-all-movies.use-case';

@Controller('movies')
export class FindAllMoviesController {
  constructor(private readonly findAllMoviesUseCase: FindAllMoviesUseCase) {}

  @Get()
  public findAll() {
    return this.findAllMoviesUseCase.findAllMovies();
  }
}
