import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { BeneficioSebien } from './beneficio-sebien.entity';
import { IdentificacionDomicilioGeograficoSebien } from './idGeografica-sebien.entity';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

@Entity('beneficiario_sebien') // Nombre de la tabla en la base de datos
export class BeneficiarioSebien {
  @PrimaryGeneratedColumn()
  id_beneficiario: number;

  @Column({ length: 18 })
  @IsString()
  @IsNotEmpty()
  curp: string;

  @Column({ length: 50 })
  @IsString()
  @IsNotEmpty()
  primer_apellido: string;

  @Column({ length: 50 })
  @IsString()
  @IsNotEmpty()
  segundo_apellido: string;

  @Column({ length: 50 })
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @Column({ length: 8 })
  @IsString()
  @IsNotEmpty()
  fecha_nacimiento: string;

  @Column({ length: 2 })
  @IsString()
  @IsNotEmpty()
  cve_ent_nac: string;

  @Column({ length: 1 })
  @IsString()
  @IsNotEmpty()
  sexo: string;

  @Column({ length: 2 })
  @IsString()
  @IsNotEmpty()
  discapacidad: string;

  @Column({ length: 2 })
  @IsString()
  @IsNotEmpty()
  indigena: string;

  @Column({ type: 'numeric', precision: 2 })
  @IsNumber()
  @IsNotEmpty()
  cve_civil: number;

  @OneToMany(() => BeneficioSebien, beneficio => beneficio.beneficiario)
  beneficios: BeneficioSebien[];

  @OneToMany(() => IdentificacionDomicilioGeograficoSebien, domicilio => domicilio.beneficiario)
  domicilios: IdentificacionDomicilioGeograficoSebien[];
}
