import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { ServiceModule } from './modules/service/service.module';
import { CategoryModule } from './modules/category/category.module';
import { ReviewModule } from './modules/review/review.module';
import { ProductModule } from './modules/product/product.module';
import { OrderModule } from './modules/order/order.module';
import { CartModule } from './modules/cart/cart.module';
import { QnaModule } from './modules/qna/qna.module';
import { PaymentModule } from './modules/payment/payment.module';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from './config/config.module';
import { GraphqlModule } from './graphql/graphql.module';

@Module({
  imports: [
    UserModule,
    ServiceModule,
    CategoryModule,
    ReviewModule,
    ProductModule,
    OrderModule,
    CartModule,
    QnaModule,
    PaymentModule,
    DatabaseModule,
    ConfigModule,
    GraphqlModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
