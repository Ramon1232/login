import { Controller, Get, Post, Body, Patch, Param, Delete, BadRequestException } from '@nestjs/common';
import { BeneficiariosService } from './beneficiarios.service';
import { CreateBeneficiarioDto } from './dto/create-beneficiario.dto';
import { UpdateBeneficiarioDto } from './dto/update-beneficiario.dto';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { Role } from 'src/common/enums/rol.enum';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiBearerAuth()
@ApiTags('beneficiarios')
@Auth(Role.ADMIN)
@Controller('beneficiarios')
export class BeneficiariosController {
  constructor(private readonly beneficiariosService: BeneficiariosService) {}

  // @Post()
  // create(@Body() createBeneficiarioDto: CreateBeneficiarioDto) {
  //   return this.beneficiariosService.create(createBeneficiarioDto);
  // }

  @Post()
  async create(@Body() createBeneficiarioDtos: CreateBeneficiarioDto[]) {
    try {
      return await this.beneficiariosService.createBulk(createBeneficiarioDtos);
    } catch (error) {
      if (error instanceof BadRequestException) {
        throw new BadRequestException(error.message);
      }
      throw error;
    }
  }

  @Get()
  findAll() {
    return this.beneficiariosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.beneficiariosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBeneficiarioDto: UpdateBeneficiarioDto) {
    return this.beneficiariosService.update(+id, updateBeneficiarioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.beneficiariosService.remove(+id);
  }
}
