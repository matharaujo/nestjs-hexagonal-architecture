import { forwardRef, Module } from '@nestjs/common';

import { AdapterModule } from '../adapter/adapter.module';
import { Services } from './services';

@Module({
  imports: [forwardRef(() => AdapterModule)],
  providers: [...Services],
  exports: [...Services],
})
export class ApplicationModule {}
