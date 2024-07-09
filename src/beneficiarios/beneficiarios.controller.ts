import { Controller, Get, Post, Body, Patch, Param, Delete, BadRequestException } from '@nestjs/common';
import { BeneficiariosService } from './beneficiarios.service';
import { UpdateBeneficiarioDto } from './dto/update-beneficiario.dto';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { Role } from 'src/common/enums/rol.enum';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { CreateBeneficiarioDto } from './dto/create-beneficiario.dto';
import { CreateBeneficioDto } from './dto/create-beneficio.dto';
import { CreateDomicilioDto } from './dto/create-idGeografica.dto';

@ApiBearerAuth()
@ApiTags('sebien')
@Controller('sebien')
export class BeneficiariosController {
  constructor(
    private readonly beneficiariosService: BeneficiariosService) { }

  @Post('beneficiario')
  @Auth(Role.OPERATIVO)
  async createWithRelation(
    @Body() createBeneficiarioDto: CreateBeneficiarioDto,
    @Body() createBeneficioDto: CreateBeneficioDto,
    @Body() createDomicilioDto: CreateDomicilioDto,
  ): Promise<any> {
    return await this.beneficiariosService.createWithRelation(
      createBeneficiarioDto,
      createBeneficioDto,
      createDomicilioDto,
    );
  }

  @Get()
  async findAll(): Promise<any> {
    return this.beneficiariosService.findAllWithRelations();
  }

  @Get(':curp')
  async findByCurp(@Param('curp') curp: string) {
    return this.beneficiariosService.findByCurpWithRelations(curp);
  }
  // @Post()
  // create(@Body() createBeneficiarioDto: CreateBeneficiarioDto) {
  //   return this.beneficiariosService.create(createBeneficiarioDto);
  // }

  // @Post()
  // async create(@Body() createBeneficiarioDtos: CreateBeneficiarioDto[]) {
  //   try {
  //     return await this.beneficiariosService.createBulk(createBeneficiarioDtos);
  //   } catch (error) {
  //     if (error instanceof BadRequestException) {
  //       throw new BadRequestException(error.message);
  //     }
  //     throw error;
  //   }
  // }



  // @Get()
  // findAll() {
  //   return this.beneficiariosService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.beneficiariosService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateBeneficiarioDto: UpdateBeneficiarioDto) {
  //   return this.beneficiariosService.update(+id, updateBeneficiarioDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.beneficiariosService.remove(+id);
  // }
}
