import { Provider } from '@nestjs/common';

import { SaveMovieUseCase } from '../ports/input/save-movie.use-case';
import { SaveMovieService } from './save-movie.service';
import { FindAllMoviesUseCase } from '../ports/input/find-all-movies.use-case';
import { FindAllMoviesService } from './find-all-movies.service';
import { FindMovieByIdUseCase } from '../ports/input/find-movie-by-id.use-case';
import { FindMovieByIdService } from './find-movie-by-id.service';
import { UpdateMovieByIdUseCase } from '../ports/input/update-movie-by-id.use-case';
import { UpdateMovieByIdService } from './update-movie-by-id.service';

export const Services: Provider[] = [
  {
    provide: SaveMovieUseCase,
    useClass: SaveMovieService,
  },
  {
    provide: FindAllMoviesUseCase,
    useClass: FindAllMoviesService,
  },
  {
    provide: FindMovieByIdUseCase,
    useClass: FindMovieByIdService,
  },
  {
    provide: UpdateMovieByIdUseCase,
    useClass: UpdateMovieByIdService,
  },
];
