import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class UserInfo {
    @Field()
    id: string;

    @Field()
    email: string;

    @Field()
    firstName: string;

    @Field()
    lastName: string;

    @Field()
    role: string;
}

@ObjectType()
export class AuthResponse {
    @Field()
    accessToken: string;

    @Field()
    refreshToken: string;

    @Field(() => UserInfo)
    user: UserInfo;
}

@ObjectType()
export class RefreshResponse {
    @Field()
    accessToken: string;
}
