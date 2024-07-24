import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { InjuvePubModule } from './injuve-pub/injuve-pub.module';
import { SebienPubModule } from './sebien-pub/sebien-pub.module';
import { CecanPubModule } from './cecan-pub/cecan-pub.module';
import { DifPubModule } from './dif-pub/dif-pub.module';
import { IprovinayPubModule } from './iprovinay-pub/iprovinay-pub.module';
import { StjlPubModule } from './stjl-pub/stjl-pub.module';
import { BeneficiarioGeneralModule } from './beneficiario-general/beneficiario-general.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('DB_HOST'),
        port: parseInt(configService.get<string>('DB_PORT')),
        username: configService.get<string>('DB_USERNAME'),
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('DB_DATABASE'),
        url: configService.get<string>('DATABASE_URL'),
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: true,
        logging: false,
      }),
    }),
    AuthModule,
    UsersModule,
    InjuvePubModule,
    SebienPubModule,
    CecanPubModule,
    DifPubModule,
    IprovinayPubModule,
    StjlPubModule,
    BeneficiarioGeneralModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}