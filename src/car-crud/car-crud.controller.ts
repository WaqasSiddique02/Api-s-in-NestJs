import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { CarCrudService } from './car-crud.service';
import { CreateCarCrudDto } from './dto/create-car-crud.dto';
import { UpdateCarCrudDto } from './dto/update-car-crud.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('car-crud')
@ApiTags('Car Crud')
export class CarCrudController {
  constructor(private readonly carCrudService: CarCrudService) {}

  @Post()
  create(@Body() createCarCrudDto: CreateCarCrudDto) {
    return this.carCrudService.create(createCarCrudDto);
  }

  @Get('findAll')
  findAll() {
    return this.carCrudService.findAll();
  }

  @Get('findOne/:id')
  findOne(@Param('id',ParseIntPipe) id: number) {
    return this.carCrudService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id',ParseIntPipe) id: number, @Body() updateCarCrudDto: UpdateCarCrudDto) {
    return this.carCrudService.update(id, updateCarCrudDto);
  }

  @Delete(':id')
  remove(@Param('id',ParseIntPipe) id: number) {
    return this.carCrudService.remove(id);
  }
}