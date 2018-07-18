import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Coupon } from './coupon.interface';

@Injectable()
export class CouponService {
  constructor(
    @InjectModel('Coupon') private readonly couponModel: Model<Coupon>,
  ) {}

  async getCoupon(id: number): Promise<Coupon> {
    return await this.couponModel.findById(id).exec();
  }

  async getAllCoupon(): Promise<Coupon[]> {
    return await this.couponModel.find().exec();
  }

  async create(couponForm): Promise<Coupon> {
    const generateCode = () => {
      const codeLength = 10;
      const carAvailable = 'ABCDEFGHIJKLMNOPQRST123456789';
      const reducer = acc =>
        (acc += carAvailable.charAt(
          Math.floor(Math.random() * carAvailable.length),
        ));

      return Array.from(Array(codeLength).keys()).reduce(reducer, '');
    };
    const couponCreate = new this.couponModel(couponForm);
    couponCreate.code = generateCode();
    couponCreate.expireDate = new Date();
    return await couponCreate.save();
  }

  async delete(id: number) {
    return await this.couponModel.deleteOne({ _id: id });
  }
}
