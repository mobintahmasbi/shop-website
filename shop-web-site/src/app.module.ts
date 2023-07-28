import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductModule } from './product/product.module';
import { OrderModule } from './order/order.module';
import { CommentModule } from './comment/comment.module';
import { ManagerModule } from './manager/manager.module';

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
  }), ProductModule, OrderModule, CommentModule, ManagerModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
