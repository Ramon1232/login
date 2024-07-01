import { ApiProperty } from '@nestjs/swagger';

export class CreateBeneficiarioDto {
  @ApiProperty()
  curp: string;

  @ApiProperty()
  primerApellido: string;

  @ApiProperty()
  segundoApellido: string;

  @ApiProperty()
  nombre: string;

  @ApiProperty()
  fechaNac: number;

  @ApiProperty()
  cveEntNac: string;

  @ApiProperty()
  sexo: string;

  @ApiProperty()
  discapacidad: string;

  @ApiProperty()
  indigena: string;

  @ApiProperty()
  cveCivil: number;

  @ApiProperty()
  cveDependencia: number;

  @ApiProperty()
  cveInstitucion: string;

  @ApiProperty()
  cvePrograma: string;

  @ApiProperty()
  cveIntraPrograma: number;

  @ApiProperty()
  cveEntFed: number;

  @ApiProperty()
  cveMunicipio: number;

  @ApiProperty()
  cveLocalidad: number;

  @ApiProperty()
  fechaBeneficio: number;

  @ApiProperty()
  cveTipoBeneficiario: number;

  @ApiProperty()
  cveTipoBeneficio: number;

  @ApiProperty()
  cantidadApoyo: number;

  @ApiProperty()
  tipoVial: string;

  @ApiProperty()
  nomVial: string;

  @ApiProperty()
  numIntNum: string;

  @ApiProperty()
  numIntAlf: string;

  @ApiProperty()
  nomLoc: string;

  @ApiProperty()
  cveLoc: string;

  @ApiProperty()
  nomMun: string;

  @ApiProperty()
  cveMun: string;

  @ApiProperty()
  nomEnt: string;

  @ApiProperty()
  cveEnt: string;

  @ApiProperty()
  observaciones: string;
}
