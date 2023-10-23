import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StrayDogsModule } from './stray-dogs/stray-dogs.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [StrayDogsModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'thomas',
      password: 'perrito',
      database: 'perros',
      entities: [],
      logging: true
    })

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
