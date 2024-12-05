import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config';

import { MovieModule } from './modules/movie/movie.module';

@Module({
  imports: [
    MovieModule,
    ConfigModule.forRoot(),
    SequelizeModule.forRoot({
      dialect: 'sqlite',
      host: ':memory:',
      autoLoadModels: true,
      models: [],
    }),
  ],
  controllers: [],
  providers: [],
})
export class ApplicationModule {}
