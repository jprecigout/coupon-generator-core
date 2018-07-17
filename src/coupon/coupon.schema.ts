import * as mongoose from 'mongoose';

export const CouponSchema = new mongoose.Schema({
  code: { type: String, require: true, unique: true },
  isPercent: { type: Number, require: true, default: true },
  amount: { type: Number, require: true },
  expireDate: { type: String, require: true, default: '' },
  activate: { type: Boolean, require: true, default: true },
});
