import { Injectable } from '@nestjs/common';
import { CreateCarCrudDto } from './dto/create-car-crud.dto';
import { UpdateCarCrudDto } from './dto/update-car-crud.dto';
import { Connection } from 'typeorm';

@Injectable()
export class CarCrudService {
  constructor(private readonly connection:Connection){}

  create(createCarCrudDto: CreateCarCrudDto) {
    this.connection.query( `INSERT INTO car (make,model,year) VALUES('${createCarCrudDto.make}','${createCarCrudDto.model}','${createCarCrudDto.year}')`)
  }

  findAll() {
    const result= this.connection.query(`SELECT id,make,model,year FROM car`);
    return result;
  }

  findOne(id: number) {
    const result=this.connection.query(`SELECT make , model ,year FROM car where id=${id}`);
    return result;
  }

  update(id: number, updateCarCrudDto: UpdateCarCrudDto) {
    return `This action updates a #${id} carCrud`;
  }

  remove(id: number) {
    return `This action removes a #${id} carCrud`;
  }
}
