import { Module } from '@nestjs/common';
import { BeneficiariosService } from './beneficiarios.service';
import { BeneficiariosController } from './beneficiarios.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Beneficiario } from './entities/beneficiario.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Beneficiario])],
  controllers: [BeneficiariosController],
  providers: [BeneficiariosService],
})
export class BeneficiariosModule {}
