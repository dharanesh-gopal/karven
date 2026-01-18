import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { GqlExecutionContext } from '@nestjs/graphql';
import { UserRole } from '../../users/entities/user.entity';
import { ROLES_KEY } from '../decorators/roles.decorator';

@Injectable()
export class RolesGuard implements CanActivate {
    constructor(private reflector: Reflector) { }

    canActivate(context: ExecutionContext): boolean {
        const requiredRoles = this.reflector.getAllAndOverride<UserRole[]>(
            ROLES_KEY,
            [context.getHandler(), context.getClass()],
        );

        if (!requiredRoles) {
            return true;
        }

        // Check if it's a GraphQL context
        let user;
        if (context.getType() === 'http') {
            const request = context.switchToHttp().getRequest();
            user = request.user;
        } else {
            const ctx = GqlExecutionContext.create(context);
            user = ctx.getContext().req.user;
        }

        if (!user) {
            return false;
        }

        return requiredRoles.some((role) => user.role === role);
    }
}
