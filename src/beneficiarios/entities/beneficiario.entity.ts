import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';


@Entity()
export class Beneficiario {

    @PrimaryGeneratedColumn()
    id_beneficiario: number;

    @Column()
    folio: number;      

    @Column()
    curp: string;

    @Column()
    nombre: string;

    @Column()
    estatus: string;

    @Column()
    programa: string;
}
