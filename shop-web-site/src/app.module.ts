import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductModule } from './product/product.module';
import { OrderModule } from './order/order.module';

@Module({
  imports: [UserModule, TypeOrmModule.forRoot({
    type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'ecommerce_website',
      autoLoadEntities: true,
      synchronize: true,
  }), ProductModule, OrderModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
