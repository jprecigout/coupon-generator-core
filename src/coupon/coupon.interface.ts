import { Document } from 'mongoose';
import { ObjectId } from 'bson';

export class Coupon extends Document {
  _id: ObjectId;
  code: string;
  isPercent: boolean;
  amount: number;
  expireDate: Date;
  activate: boolean;
}
