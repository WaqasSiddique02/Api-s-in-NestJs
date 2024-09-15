import { Injectable } from '@nestjs/common';
import { CreateCarCrudDto } from './dto/create-car-crud.dto';
import { UpdateCarCrudDto } from './dto/update-car-crud.dto';
import { Connection } from 'typeorm';

@Injectable()
export class CarCrudService {
  constructor(private readonly connection:Connection){}

  create(createCarCrudDto: CreateCarCrudDto) {
    this.connection.query( `INSERT INTO car (make,model,year) VALUES('${createCarCrudDto.make}','${createCarCrudDto.model}',${createCarCrudDto.year})`);
    return 'Car created!';
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
    this.connection.query(`UPDATE car set make='${updateCarCrudDto.make}',model='${updateCarCrudDto.model}',year=${updateCarCrudDto.year} WHERE id=${id}`);
    return 'Car updated!';
  }

  remove(id: number) {
    this.connection.query(`DELETE FROM car WHERE id=${id}`);
    return "Car deleted";
  }
}