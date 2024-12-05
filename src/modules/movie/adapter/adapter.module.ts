import { forwardRef, Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { ApplicationModule } from '../../movie/application/application.module';
import { ServicesOut } from './output';
import { MovieEntity } from './output/movie-entity';
import { SaveMovieController } from './input/web/save-movie.controller';
import { FindAllMoviesController } from './input/web/find-all-movies.controller';
import { FindMovieByIdController } from './input/web/find-movie-by-id.controller';
import { UpdateMovieByIdController } from './input/web/update-movie-by-id.controller';

@Module({
  imports: [
    forwardRef(() => ApplicationModule),
    SequelizeModule.forFeature([MovieEntity]),
  ],
  providers: [...ServicesOut],
  exports: [...ServicesOut],
  controllers: [
    SaveMovieController,
    FindAllMoviesController,
    FindMovieByIdController,
    UpdateMovieByIdController,
  ],
})
export class AdapterModule {}
