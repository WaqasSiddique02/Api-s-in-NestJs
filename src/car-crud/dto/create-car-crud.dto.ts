import { IsNotEmpty, IsString } from "class-validator";
import { Column } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";

export class CreateCarCrudDto {
    @ApiProperty({
        description: 'The make of the car',
        example: 'Toyota',
    })
    @Column()
    @IsString()
    @IsNotEmpty()
    make: string;

    @ApiProperty({
        description: 'The model of the car',
        example: 'Corolla',
    })
    @Column()
    @IsString()
    @IsNotEmpty()
    model: string;

    @ApiProperty({
        description: 'The year of the car',
        example: 2021,
    })
    @Column()
    @IsNotEmpty()
    year: number;
}
