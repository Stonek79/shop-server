import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { OrderModule } from './order/order.module';
import { ProfileModule } from './profile/profile.module';

@Module({
  imports: [UsersModule, OrderModule, ProfileModule],
})
export class AppModule {}
