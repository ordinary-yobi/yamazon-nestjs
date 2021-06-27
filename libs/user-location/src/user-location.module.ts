import { Module } from '@nestjs/common';
import { UserLocationService } from './user-location.service';

@Module({
  providers: [UserLocationService],
  exports: [UserLocationService],
})
export class UserLocationModule {}
