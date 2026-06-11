import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Estudiante } from './estudiante.entity';
import { CreateEstudianteDto } from './dto/create-estudiante.dto';

@Injectable()
export class EstudianteService {
  constructor(
    @InjectRepository(Estudiante)
    private readonly estudianteRepository: Repository<Estudiante>,
  ) {}

  async create(createEstudianteDto: CreateEstudianteDto): Promise<Estudiante> {
    const nuevoEstudiante = this.estudianteRepository.create(createEstudianteDto);
    return await this.estudianteRepository.save(nuevoEstudiante);
  }

  async findAll(): Promise<Estudiante[]> {
    return await this.estudianteRepository.find();
  }
}
