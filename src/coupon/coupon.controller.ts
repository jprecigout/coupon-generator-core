import { Controller, Get, Param, Post, Body, Delete } from '@nestjs/common';
import { CouponService } from './coupon.service';
import { Coupon } from './coupon.interface';

@Controller('v1')
export class CouponController {
  constructor(private readonly couponService: CouponService) {}

  @Get('/coupons/:id')
  async getCoupon(@Param('id') id): Promise<Coupon> {
    return this.couponService.getCoupon(id);
  }

  @Get('/coupons')
  async getAllCoupon() {
    return this.couponService.getAllCoupon();
  }

  @Post('/coupons')
  async create(@Body() coupon): Promise<Coupon> {
    return this.couponService.create(coupon);
  }

  @Delete('/coupons/:id')
  async delete(@Param('id') id) {
    return this.couponService.delete(id);
  }
}
