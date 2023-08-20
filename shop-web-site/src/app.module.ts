import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductModule } from './product/product.module';
import { OrderModule } from './order/order.module';
import { CommentModule } from './comment/comment.module';
import { ManagerModule } from './manager/manager.module';
import { AuthModule } from './auth/auth.module';
import { SharedModule } from './shared/shared.module';

@Module({
  imports: [UserModule, TypeOrmModule.forRoot({
    type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '1380',
      database: 'ecommerce_website',
      autoLoadEntities: true,
      synchronize: true,
  }), ProductModule, OrderModule, CommentModule, ManagerModule, AuthModule, SharedModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
