import { Connection } from 'mongoose';
import { CouponSchema } from './coupon.schema';

export const couponProviders = [
  {
    provide: 'CouponModelToken',
    useFactory: (connection: Connection) =>
      connection.model('Coupon', CouponSchema),
    inject: ['DbConnectionToken'],
  },
];
