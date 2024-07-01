import { ApiProperty } from '@nestjs/swagger';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';


@Entity()
export class Beneficiario {

    @PrimaryGeneratedColumn()
    id_beneficiario: number;

    @ApiProperty()
    @Column()
    curp: string;

    @ApiProperty()
    @Column()
    primerApellido: string;

    @ApiProperty()
    @Column()
    segundoApellido: string;

    @ApiProperty()
    @Column()
    nombre: string;

    @ApiProperty()
    @Column()
    fechaNac: number;

    @ApiProperty()
    @Column()
    cveEntNac: string;

    @ApiProperty()
    @Column()
    sexo: string;

    @ApiProperty()
    @Column()
    discapacidad: string;

    @ApiProperty()
    @Column()
    indigena: string;

    @ApiProperty()
    @Column()
    cveCivil: number;

    @ApiProperty()
    @Column()
    cveDependencia: number;

    @ApiProperty()
    @Column()
    cveInstitucion: string;

    @ApiProperty()
    @Column()
    cvePrograma: string;

    @ApiProperty()
    @Column()
    cveIntraPrograma: number;

    @ApiProperty()
    @Column()
    cveEntFed: number;

    @ApiProperty()
    @Column()
    cveMunicipio: number;

    @ApiProperty()
    @Column()
    cveLocalidad: number;

    @ApiProperty()
    @Column()
    fechaBeneficio: number;

    @ApiProperty()
    @Column()
    cveTipoBeneficiario: number;

    @ApiProperty()
    @Column()
    cveTipoBeneficio: number;

    @ApiProperty()
    @Column()
    cantidadApoyo: number;

    @ApiProperty()
    @Column()
    tipoVial: string;

    @ApiProperty()
    @Column()
    nomVial: string;

    @ApiProperty()
    @Column()
    numIntNum: string;

    @ApiProperty()
    @Column()
    numIntAlf: string;

    @ApiProperty()
    @Column()
    nomLoc: string;

    @ApiProperty()
    @Column()
    cveLoc: string;

    @ApiProperty()
    @Column()
    nomMun: string;

    @ApiProperty()
    @Column()
    cveMun: string;

    @ApiProperty()
    @Column()
    nomEnt: string;

    @ApiProperty()
    @Column()
    cveEnt: string;

    @ApiProperty()
    @Column()
    observaciones: string;

}
