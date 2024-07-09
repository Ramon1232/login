import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { BeneficiarioSebien } from './beneficiario-sebien.entity';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

@Entity('beneficio_sebien') // Nombre de la tabla en la base de datos
export class BeneficioSebien {
  @PrimaryGeneratedColumn()
  id_beneficio: number;

  @Column({ type: 'numeric', precision: 2 })
  @IsNumber()
  @IsNotEmpty()
  cve_dependencia: number;

  @Column({ length: 5 })
  @IsString()
  @IsNotEmpty()
  cve_institucion: string;

  @Column({ type: 'numeric', precision: 4 })
  @IsNumber()
  @IsNotEmpty()
  cve_programa: number;

  @Column({ type: 'numeric', precision: 2 })
  @IsNumber()
  @IsNotEmpty()
  cve_intra_programa: number;

  @Column({ type: 'numeric', precision: 2 })
  @IsNumber()
  @IsNotEmpty()
  cve_ent_fed: number;

  @Column({ type: 'numeric', precision: 3 })
  @IsNumber()
  @IsNotEmpty()
  cve_municipio: number;

  @Column({ type: 'numeric', precision: 4 })
  @IsNumber()
  @IsNotEmpty()
  cve_localidad: number;

  @Column({ type: 'numeric', precision: 8 })
  @IsNumber()
  @IsNotEmpty()
  fecha_beneficio: number;

  @Column({ type: 'numeric', precision: 2 })
  @IsNumber()
  @IsNotEmpty()
  cve_tipo_beneficiario: number;

  @Column({ type: 'numeric', precision: 3 })
  @IsNumber()
  @IsNotEmpty()
  cve_tipo_beneficio: number;

  @Column({ type: 'numeric', precision: 16, scale: 2 })
  @IsNumber()
  @IsNotEmpty()
  cantidad_apoyo: number;

  @ManyToOne(() => BeneficiarioSebien, beneficiario => beneficiario.beneficios)
  @JoinColumn({ name: 'id_beneficiario' })
  beneficiario: BeneficiarioSebien;
}