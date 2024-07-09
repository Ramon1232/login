// create-domicilio.dto.ts
import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateDomicilioDto {
  
  tipo_vial: string;
  
  nom_vial: string;
  
  num_int_num: number;
  
  num_int_alf: string;
  
  nom_loc: string;
  
  cve_loc: string;
  
  nom_mun: string;
  
  cve_mun: string;
  
  nom_ent: string;
  
  cve_ent: string;

  observaciones: string;
}
