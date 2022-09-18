import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoryesModule } from './categoryes/categoryes.module';
import { CategoryeEntity } from './categoryes/entities/categorye.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'root',
      password: 'root',
      database: 'pizza-res',
      entities: [CategoryeEntity],
      synchronize: true,
    }),
    CategoryesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
