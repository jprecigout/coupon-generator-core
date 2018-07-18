import { Document } from 'mongoose';

export interface Coupon extends Document {
  code: string;
  isPercent: boolean;
  amount: number;
  expireDate: Date;
  activate: boolean;
}
