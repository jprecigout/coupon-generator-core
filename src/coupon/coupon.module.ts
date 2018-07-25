import { Module } from '@nestjs/common';
import { CouponController } from './coupon.controller';
import { CouponService } from './coupon.service';
import { DatabaseModule } from '../database/database.module';
import { couponProviders } from './coupon.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [CouponController],
  providers: [CouponService, ...couponProviders],
})
export class CouponModule {}
