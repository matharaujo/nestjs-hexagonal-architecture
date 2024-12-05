import { Module } from '@nestjs/common';

import { AdapterModule } from './adapter/adapter.module';
import { ApplicationModule } from './application/application.module';

@Module({
  imports: [ApplicationModule, AdapterModule],
})
export class MovieModule {}
