import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArticlesModule } from './articles/articles.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ItemsModule } from './items/items.module';

@Module({
  imports: [ArticlesModule, UsersModule, AuthModule, ItemsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
