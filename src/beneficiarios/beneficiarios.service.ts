import { Injectable } from '@nestjs/common';
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

  async create(createBeneficiarioDto: CreateBeneficiarioDto) {
    const beneficiario = this.beneficiarioRepository.create(createBeneficiarioDto);
    return await this.beneficiarioRepository.save(beneficiario);
  }

  findAll() {
    return this.beneficiarioRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} beneficiario`;
  }

  update(id: number, updateBeneficiarioDto: UpdateBeneficiarioDto) {
    return `This action updates a #${id} beneficiario`;
  }

  remove(id: number) {
    return `This action removes a #${id} beneficiario`;
  }
}
