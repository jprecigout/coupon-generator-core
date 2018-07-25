import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Delete,
} from '@nestjs/common';
import { CouponService } from './coupon.service';
import { Coupon } from './coupon.interface';

@Controller('coupon')
export class CouponController {
  constructor(private readonly couponService: CouponService) {}

  @Get('/edit/:id')
  async getCoupon(@Param('id') id): Promise<Coupon> {
    return this.couponService.getCoupon(id);
  }

  @Get('/all')
  async getAllCoupon() {
    return this.couponService.getAllCoupon();
  }

  @Post('/create')
  async create(@Body() coupon): Promise<Coupon> {
    return this.couponService.create(coupon);
  }

  @Delete(':id')
  async delete(@Param('id') id) {
    return this.couponService.delete(id);
  }
}
