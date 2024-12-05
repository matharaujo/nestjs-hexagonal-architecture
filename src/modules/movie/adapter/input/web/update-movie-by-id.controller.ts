import {
  Body,
  Controller,
  Param,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';

import { UpdateMovieByIdRequest } from './update-movie-by-id.request';
import { UpdateMovieByIdCommand } from 'src/modules/movie/application/ports/input/update-movie-by-id.command';
import { UpdateMovieByIdUseCase } from 'src/modules/movie/application/ports/input/update-movie-by-id.use-case';

@Controller('movies')
export class UpdateMovieByIdController {
  constructor(
    private readonly updateMovieByIdUseCase: UpdateMovieByIdUseCase,
  ) {}

  @Put(':id')
  @UsePipes(new ValidationPipe({ transform: true }))
  public save(
    @Param('id') id: number,
    @Body() request: UpdateMovieByIdRequest,
  ) {
    const command: UpdateMovieByIdCommand = request.toCommand();

    return this.updateMovieByIdUseCase.updateMovieById(id, command);
  }
}
