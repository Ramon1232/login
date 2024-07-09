// create-beneficio.dto.ts
import { IsNumber, IsNotEmpty, IsString } from 'class-validator';

export class CreateBeneficioDto {
  
  cve_dependencia: number;

  cve_institucion: string;
  
  cve_programa: number;
  
  cve_intra_programa: number;
  
  cve_ent_fed: number;
  
  cve_municipio: number;
  
  cve_localidad: number;
  
  fecha_beneficio: number;
  
  cve_tipo_beneficiario: number;
  
  cve_tipo_beneficio: number;
  
  cantidad_apoyo: number;
}
