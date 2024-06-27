import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateBeneficiarioDto } from './dto/create-beneficiario.dto';
import { UpdateBeneficiarioDto } from './dto/update-beneficiario.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Beneficiario } from './entities/beneficiario.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BeneficiariosService {

  constructor(
    @InjectRepository(Beneficiario)
    private beneficiarioRepository: Repository<Beneficiario>
  ){}

  async create(createBeneficiarioDto: CreateBeneficiarioDto): Promise<Beneficiario> {
    const existing = await this.beneficiarioRepository.findOne({
      where: {
        curp: createBeneficiarioDto.curp,
      },
    });
    if (existing) {
      throw new BadRequestException('El beneficiario ya existe');
    }

    const beneficiario = this.beneficiarioRepository.create(createBeneficiarioDto);
    return await this.beneficiarioRepository.save(beneficiario);
  }

  async createBulk(createBeneficiarioDtos: CreateBeneficiarioDto[]): Promise<Beneficiario[]> {
    const existingBeneficiarios = await this.beneficiarioRepository.find();
    const existingCURPs = new Set(existingBeneficiarios.map(b => b.curp));

    const newBeneficiarios = createBeneficiarioDtos.filter(
      beneficiario => !existingCURPs.has(beneficiario.curp)
    );

    if (newBeneficiarios.length !== createBeneficiarioDtos.length) {
      throw new BadRequestException('Algunos beneficiarios que esta intentando registrar ya existen, favor de revisar.');
    }

    const beneficiarios = this.beneficiarioRepository.create(newBeneficiarios);
    return await this.beneficiarioRepository.save(beneficiarios);
  }

  async findAll(): Promise<Beneficiario[]> {
    return await this.beneficiarioRepository.find();
  }

  async findOne(id: number): Promise<Beneficiario> {
    return await this.beneficiarioRepository.findOne({ where: { id_beneficiario: id } });
  }

  async update(id: number, updateBeneficiarioDto: UpdateBeneficiarioDto): Promise<Beneficiario> {
    await this.beneficiarioRepository.update(id, updateBeneficiarioDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.beneficiarioRepository.delete(id);
  }
}
