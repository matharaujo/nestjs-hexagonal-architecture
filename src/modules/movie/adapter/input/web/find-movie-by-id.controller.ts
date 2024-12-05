import { Controller, Get, Param } from '@nestjs/common';

import { FindMovieByIdUseCase } from 'src/modules/movie/application/ports/input/find-movie-by-id.use-case';

@Controller('movies')
export class FindMovieByIdController {
  constructor(private readonly findMovieByIdUseCase: FindMovieByIdUseCase) {}

  @Get(':id')
  public findAll(@Param('id') id: number) {
    return this.findMovieByIdUseCase.findMovieById(+id);
  }
}
