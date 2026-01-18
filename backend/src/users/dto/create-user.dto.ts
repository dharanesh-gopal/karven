import { IsEmail, IsString, MinLength, IsEnum, IsOptional } from 'class-validator';
import { InputType, Field } from '@nestjs/graphql';
import { UserRole } from '../entities/user.entity';

@InputType()
export class CreateUserDto {
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

    @Field(() => String, { nullable: true })
    @IsEnum(UserRole)
    @IsOptional()
    role?: UserRole;
}
