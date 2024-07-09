import { BadRequestException, Injectable } from '@nestjs/common';
import { UpdateBeneficiarioDto } from './dto/update-beneficiario.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BeneficiarioSebien } from './entities/beneficiario-sebien.entity';
import { BeneficioSebien } from './entities/beneficio-sebien.entity';
import { IdentificacionDomicilioGeograficoSebien } from './entities/idGeografica-sebien.entity';
import { CreateBeneficiarioDto } from './dto/create-beneficiario.dto';
import { CreateBeneficioDto } from './dto/create-beneficio.dto';
import { CreateDomicilioDto } from './dto/create-idGeografica.dto';

@Injectable()
export class BeneficiariosService {

  constructor(
    @InjectRepository(BeneficiarioSebien)
    private beneficiarioRepository: Repository<BeneficiarioSebien>,
    @InjectRepository(BeneficioSebien)
    private beneficioRepository: Repository<BeneficioSebien>,
    @InjectRepository(IdentificacionDomicilioGeograficoSebien)
    private domicilioRepository: Repository<IdentificacionDomicilioGeograficoSebien>,
  ){}

  async createWithRelation(createBeneficiarioDto: CreateBeneficiarioDto, createBeneficioDto: CreateBeneficioDto, createDomicilioDto: CreateDomicilioDto): Promise<any> {
    const beneficiario = new BeneficiarioSebien();
    Object.assign(beneficiario, createBeneficiarioDto);
    const savedBeneficiario = await this.beneficiarioRepository.save(beneficiario);

    const beneficio = new BeneficioSebien();
    Object.assign(beneficio, createBeneficioDto);
    beneficio.beneficiario = savedBeneficiario; 
    const savedBeneficio = await this.beneficioRepository.save(beneficio);

    const domicilio = new IdentificacionDomicilioGeograficoSebien();
    Object.assign(domicilio, createDomicilioDto);
    domicilio.beneficiario = savedBeneficiario;
    const savedDomicilio = await this.domicilioRepository.save(domicilio);

    return {
      beneficiario: savedBeneficiario,
      beneficio: savedBeneficio,
      domicilio: savedDomicilio,
    };
  }

  async findAllWithRelations(): Promise<any> {
    const beneficiarios = await this.beneficiarioRepository.find();
    const beneficios = await this.beneficioRepository.find();
    const domicilios = await this.domicilioRepository.find();

    return { beneficiarios, beneficios, domicilios };
  }

  async findByCurpWithRelations(curp: string): Promise<BeneficiarioSebien | undefined> {
    return await this.beneficiarioRepository
      .createQueryBuilder('b')
      .leftJoinAndSelect('b.beneficios', 'bs')
      .leftJoinAndSelect('b.domicilios', 'idg')
      .where('b.curp = :curp', { curp })
      .getOne();
  }

  // async create(createBeneficiarioDto: CreateBeneficiarioDto): Promise<Beneficiario> {
  //   const existing = await this.beneficiarioRepository.findOne({
  //     where: {
  //       curp: createBeneficiarioDto.curp,
  //     },
  //   });
  //   if (existing) {
  //     throw new BadRequestException('El beneficiario ya existe');
  //   }

  //   const beneficiario = this.beneficiarioRepository.create(createBeneficiarioDto);
  //   return await this.beneficiarioRepository.save(beneficiario);
  // }

  // async createBulk(createBeneficiarioDtos: CreateBeneficiarioDto[]): Promise<Beneficiario[]> {
  //   const existingBeneficiarios = await this.beneficiarioRepository.find();
  //   const existingCURPs = new Set(existingBeneficiarios.map(b => b.curp));

  //   const newBeneficiarios = createBeneficiarioDtos.filter(
  //     beneficiario => !existingCURPs.has(beneficiario.curp)
  //   );

  //   if (newBeneficiarios.length !== createBeneficiarioDtos.length) {
  //     throw new BadRequestException('Algunos beneficiarios que esta intentando registrar ya existen, favor de revisar.');
  //   }

  //   const beneficiarios = this.beneficiarioRepository.create(newBeneficiarios);
  //   return await this.beneficiarioRepository.save(beneficiarios);
  // }

  // async findAll(): Promise<Beneficiario[]> {
  //   return await this.beneficiarioRepository.find();
  // }

  // async findOne(id: number): Promise<Beneficiario> {
  //   return await this.beneficiarioRepository.findOne({ where: { id_beneficiario: id } });
  // }

  // async update(id: number, updateBeneficiarioDto: UpdateBeneficiarioDto): Promise<Beneficiario> {
  //   await this.beneficiarioRepository.update(id, updateBeneficiarioDto);
  //   return this.findOne(id);
  // }

  // async remove(id: number): Promise<void> {
  //   await this.beneficiarioRepository.delete(id);
  // }
}
