import { Injectable, Inject, HttpException, HttpStatus } from '@nestjs/common';
import { Model } from 'mongoose';
import { Coupon } from './coupon.interface';
import * as moment from 'moment';

@Injectable()
export class CouponService {
  constructor(
    @Inject('CouponModelToken') private readonly couponModel: typeof Model,
  ) {}

  async getCoupon(id: string): Promise<Coupon> {
    try {
      const response = await this.couponModel.findById(id).exec();
      return response;
    } catch (error) {
      throw new HttpException(
        'Error : ' + error,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async getAllCoupon(): Promise<Coupon[]> {
    try {
      const response = await this.couponModel.find().exec();
      return response;
    } catch (error) {
      throw new HttpException(
        'Error : ' + error,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async create(couponForm: Coupon): Promise<Coupon> {
    if (!couponForm.amount) {
      throw new HttpException(
        'Error : amount is mandatory',
        HttpStatus.BAD_REQUEST,
      );
    }

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

    couponCreate.expireDate = couponForm.expireDate
      ? couponForm.expireDate
      : moment().add(7, 'days');

    try {
      const response = await couponCreate.save();
      return response;
    } catch (error) {
      throw new HttpException(
        'Error : ' + error,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async delete(id: string) {
    try {
      const response = await this.couponModel.deleteOne({ _id: id });
      return response;
    } catch (error) {
      throw new HttpException(
        'Error : ' + error,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
