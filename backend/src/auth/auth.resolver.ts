import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { AuthResponse, RefreshResponse } from './dto/auth-response.dto';

@Resolver()
export class AuthResolver {
    constructor(private readonly authService: AuthService) { }

    @Mutation(() => AuthResponse)
    async login(@Args('loginInput') loginDto: LoginDto) {
        return this.authService.login(loginDto);
    }

    @Mutation(() => AuthResponse)
    async register(@Args('registerInput') registerDto: RegisterDto) {
        return this.authService.register(registerDto);
    }

    @Mutation(() => RefreshResponse)
    async refreshToken(@Args('refreshToken') refreshToken: string) {
        return this.authService.refreshToken(refreshToken);
    }
}
