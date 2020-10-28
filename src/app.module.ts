import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { AuthModule } from './logical/auth/auth.module';
// import { AuthService } from './logical/auth/auth.service';
import { UserModule } from './logical/user/user.module';
// import { UserService } from './logical/user/user.service';
import { UserController } from './logical/user/user.controller';
import { CommodityService } from './logical/commodity/commodity.service';
import { CommodityController } from './logical/commodity/commodity.controller';

@Module({
  imports: [AuthModule, UserModule],
  controllers: [AppController, UserController, CommodityController],
  providers: [AppService, CommodityService],
})
export class AppModule {}
