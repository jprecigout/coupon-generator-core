import { Test, TestingModule } from '@nestjs/testing';
import { CouponController } from './coupon.controller';
import { CouponService } from './coupon.service';
import { getModelToken } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Coupon } from './coupon.interface';

describe('CouponController', () => {
  let couponController: CouponController;
  let couponService: CouponService;

  beforeEach(async () => {
    const couponModule: TestingModule = await Test.createTestingModule({
      controllers: [CouponController],
      providers: [
        CouponService,
        { provide: 'CouponModelToken', useValue: Coupon },
      ],
    }).compile();

    couponService = couponModule.get<CouponService>(CouponService);
    couponController = couponModule.get<CouponController>(CouponController);
  });

  describe('getCoupon', async () => {
    it('should return an coupon object', async () => {
      const result = {
        id: 1,
        code: 'ABCDEFGHI1',
        isPercent: false,
        amount: 5,
        expireDate: new Date(),
        activate: true,
      };

      jest.spyOn(couponService, 'getCoupon').mockImplementation(() => result);
      expect(await couponController.getCoupon(1)).toBe(result);
    });
  });
});
