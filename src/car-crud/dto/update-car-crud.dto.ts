import { PartialType } from '@nestjs/swagger';
import { CreateCarCrudDto } from './create-car-crud.dto';
import { Column } from 'typeorm';
import { IsOptional, IsString } from 'class-validator';

export class UpdateCarCrudDto extends PartialType(CreateCarCrudDto) {
    @Column()
    @IsString()
    @IsOptional()
    make:string;

    @Column()
    @IsString()
    @IsOptional()
    model:string;

    @Column()
    @IsString()
    @IsOptional()
    year:number;
}
