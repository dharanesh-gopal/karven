import { IsEmail, IsString, MinLength, IsEnum, IsOptional, IsBoolean } from 'class-validator';
import { InputType, Field, PartialType } from '@nestjs/graphql';
import { CreateUserDto } from './create-user.dto';
import { UserRole } from '../entities/user.entity';

@InputType()
export class UpdateUserDto extends PartialType(CreateUserDto) {
    @Field({ nullable: true })
    @IsEmail()
    @IsOptional()
    email?: string;

    @Field({ nullable: true })
    @IsString()
    @MinLength(2)
    @IsOptional()
    firstName?: string;

    @Field({ nullable: true })
    @IsString()
    @MinLength(2)
    @IsOptional()
    lastName?: string;

    @Field(() => String, { nullable: true })
    @IsEnum(UserRole)
    @IsOptional()
    role?: UserRole;

    @Field({ nullable: true })
    @IsBoolean()
    @IsOptional()
    isActive?: boolean;
}
