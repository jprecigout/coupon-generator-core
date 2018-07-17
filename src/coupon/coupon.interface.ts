import { Document } from 'mongoose';

export interface Coupon extends Document {
  code: string;
  isPercent: number;
  amount: number;
  expireDate: string;
  activate: boolean;
}
