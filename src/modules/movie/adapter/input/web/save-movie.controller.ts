import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';

import { SaveMovieCommand } from '../../../application/ports/input/save-movie.command';
import { SaveMovieUseCase } from '../../../application/ports/input/save-movie.use-case';
import { SaveMovieRequest } from './save-movie.request';

@Controller('movies')
export class SaveMovieController {
  constructor(private readonly saveMovieUseCase: SaveMovieUseCase) {}

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  public save(@Body() request: SaveMovieRequest) {
    const command: SaveMovieCommand = request.toCommand();

    return this.saveMovieUseCase.saveMovie(command);
  }
}
