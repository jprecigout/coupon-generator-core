import { Module } from '@nestjs/common';
import { CouponSchema } from './coupon.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { CouponController } from './coupon.controller';
import { CouponService } from './coupon.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Coupon', schema: CouponSchema }]),
  ],
  controllers: [CouponController],
  providers: [CouponService],
})
export class CouponModule {}
