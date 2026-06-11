import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateEstudianteDto {
  @ApiProperty({ description: 'Nombre del estudiante' })
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @ApiProperty({ description: 'Código único del estudiante' })
  @IsString()
  @IsNotEmpty()
  codigo: string;
}
