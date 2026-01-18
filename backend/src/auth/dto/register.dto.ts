import { IsEmail, IsString, MinLength } from 'class-validator';
import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class RegisterDto {
    @Field()
    @IsEmail()
    email: string;

    @Field()
    @IsString()
    @MinLength(2)
    firstName: string;

    @Field()
    @IsString()
    @MinLength(2)
    lastName: string;

    @Field()
    @IsString()
    @MinLength(8)
    password: string;
}
