import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { BeneficiarioSebien } from './beneficiario-sebien.entity';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

@Entity('identificacion_domicilio_geografico_sebien') // Nombre de la tabla en la base de datos
export class IdentificacionDomicilioGeograficoSebien {
  @PrimaryGeneratedColumn({ name: 'id_dom_geografico' })
  id_dom_geografico: number;

  @Column({ length: 255 })
  @IsString()
  @IsNotEmpty()
  tipo_vial: string;

  @Column({ length: 255 })
  @IsString()
  @IsNotEmpty()
  nom_vial: string;

  @Column({ type: 'numeric', precision: 5 })
  @IsNumber()
  @IsNotEmpty()
  num_int_num: number;

  @Column({ length: 35 })
  @IsString()
  num_int_alf: string;

  @Column({ length: 255 })
  @IsString()
  @IsNotEmpty()
  nom_loc: string;

  @Column({ length: 4 })
  @IsString()
  @IsNotEmpty()
  cve_loc: string;

  @Column({ length: 255 })
  @IsString()
  @IsNotEmpty()
  nom_mun: string;

  @Column({ length: 3 })
  @IsString()
  @IsNotEmpty()
  cve_mun: string;

  @Column({ length: 255 })
  @IsString()
  @IsNotEmpty()
  nom_ent: string;

  @Column({ length: 2 })
  @IsString()
  @IsNotEmpty()
  cve_ent: string;

  @Column({ length: 255 })
  @IsString()
  observaciones: string;

  @ManyToOne(() => BeneficiarioSebien, beneficiario => beneficiario.domicilios)
  @JoinColumn({ name: 'id_beneficiario' })
  beneficiario: BeneficiarioSebien;
}
