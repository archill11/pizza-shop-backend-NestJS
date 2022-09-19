import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoryesModule } from './categoryes/categoryes.module';
import { CategoryeEntity } from './categoryes/entities/categorye.entity';
import { config } from 'dotenv';

config();
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      extra: {
        ssl: {
          rejectUnauthorized: false,
        },
      },
      host: process.env.POSTGRES_HOST,
      port: 5432,
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DATABASE,
      entities: [CategoryeEntity],
      synchronize: false,
    }),
    CategoryesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
