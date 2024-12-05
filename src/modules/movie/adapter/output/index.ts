import { Provider } from '@nestjs/common';

import { MoviePersistencePort } from '../../application/ports/output/movie-persistence.port';
import { MoviePersistenceAdapter } from './movie-persistence.adapter';
import { MovieMapper } from './movie-mapper';

export const ServicesOut: Provider[] = [
  {
    provide: MoviePersistencePort,
    useClass: MoviePersistenceAdapter,
  },
  MovieMapper,
];
