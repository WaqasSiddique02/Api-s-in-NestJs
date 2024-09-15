import { Module } from '@nestjs/common';
import { CarCrudService } from './car-crud.service';
import { CarCrudController } from './car-crud.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature()],
  controllers: [CarCrudController],
  providers: [CarCrudService],
})
export class CarCrudModule {}
