import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { User, UserRole } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { GqlAuthGuard } from '../auth/guards/gql-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';

@Resolver(() => User)
@UseGuards(GqlAuthGuard, RolesGuard)
export class UsersResolver {
    constructor(private readonly usersService: UsersService) { }

    @Mutation(() => User)
    @Roles(UserRole.ADMIN)
    createUser(@Args('createUserInput') createUserDto: CreateUserDto) {
        return this.usersService.create(createUserDto);
    }

    @Query(() => [User], { name: 'users' })
    @Roles(UserRole.ADMIN, UserRole.MANAGER)
    findAll() {
        return this.usersService.findAll();
    }

    @Query(() => User, { name: 'user' })
    findOne(@Args('id') id: string) {
        return this.usersService.findOne(id);
    }

    @Mutation(() => User)
    updateUser(
        @Args('id') id: string,
        @Args('updateUserInput') updateUserDto: UpdateUserDto,
    ) {
        return this.usersService.update(id, updateUserDto);
    }

    @Mutation(() => Boolean)
    @Roles(UserRole.ADMIN)
    async removeUser(@Args('id') id: string) {
        await this.usersService.remove(id);
        return true;
    }
}
