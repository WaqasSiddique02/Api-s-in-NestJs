import { PartialType } from '@nestjs/swagger';
import { CreateCarCrudDto } from './create-car-crud.dto';
import { Column } from 'typeorm';
import { IsOptional, IsString, IsNumber } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateCarCrudDto extends PartialType(CreateCarCrudDto) {
    @Column()
    @ApiPropertyOptional({ description: 'The make of the car', example: 'Toyota' })
    @IsString()
    @IsOptional()
    make: string;

    @Column()
    @ApiPropertyOptional({ description: 'The model of the car', example: 'Corolla' })
    @IsString()
    @IsOptional()
    model: string;

    @Column()
    @ApiPropertyOptional({ description: 'The year the car was made', example: 2020 })
    @IsNumber()
    @IsOptional()
    year: number;
}
