import { Module } from '@nestjs/common';
import { BeneficiariosService } from './beneficiarios.service';
import { BeneficiariosController } from './beneficiarios.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BeneficiarioSebien } from './entities/beneficiario-sebien.entity';
import { BeneficioSebien } from './entities/beneficio-sebien.entity';
import { IdentificacionDomicilioGeograficoSebien } from './entities/idGeografica-sebien.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BeneficiarioSebien, BeneficioSebien, IdentificacionDomicilioGeograficoSebien])],
  controllers: [BeneficiariosController],
  providers: [BeneficiariosService],
})
export class BeneficiariosModule {}
