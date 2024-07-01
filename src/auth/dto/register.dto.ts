import { Transform } from "class-transformer";
import { IsEmail, IsString, MinLength } from "class-validator";

export class RegisterDto{
    
    @IsString()
    name: string;
    
    @IsEmail()
    email: string;

    @Transform(({ value }) => value.trim())
    @IsString()
    password: string;

    @IsString()
    role: string;
}