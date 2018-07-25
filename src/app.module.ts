import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CouponModule } from './coupon/coupon.module';

@Module({
  imports: [CouponModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
