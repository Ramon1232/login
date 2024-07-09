// create-beneficiario.dto.ts
import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateBeneficiarioDto {
  
  curp: string;

  primer_apellido: string;

  segundo_apellido: string;

  nombre: string;

  fecha_nacimiento: string;

  cve_ent_nac: string;

  sexo: string;
  
  discapacidad: string;

  indigena: string;
  
  cve_civil: number;

}
