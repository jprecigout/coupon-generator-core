import { Controller, Get, Param, Post, Body, Delete } from '@nestjs/common';
import { CouponService } from './coupon.service';
import { Coupon } from './coupon.interface';
import { create } from 'domain';

@Controller('coupon')
export class CouponController {
  constructor(private readonly couponService: CouponService) {}

  @Get(':id')
  async getCoupon(@Param('id') id): Promise<Coupon> {
    return await this.couponService.getCoupon(id);
  }

  @Get('/all')
  async getAllCoupon() {
    return await this.couponService.getAllCoupon();
  }

  @Post('/create')
  async create(@Body() coupon): Promise<Coupon> {
    return await this.couponService.create(coupon);
  }

  @Delete(':id')
  async delete(@Param('id') id) {
    return await this.couponService.delete(id);
  }
}
