import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CouponModule } from './coupon/coupon.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://mongo/coupon'), CouponModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
