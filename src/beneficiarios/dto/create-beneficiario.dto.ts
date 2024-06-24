import { IsNumber, IsString } from "class-validator";


export class CreateBeneficiarioDto {

    @IsNumber()
    folio: number;

    @IsString()
    curp: string;

    @IsString()
    nombre: string;

    @IsString()
    estatus: string;

    @IsString()
    programa: string;
}
