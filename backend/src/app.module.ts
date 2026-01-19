import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';

import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
    imports: [
        // Configuration Module
        ConfigModule.forRoot({
            isGlobal: true,
            envFilePath: '.env',
        }),

        // Database Module
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            useFactory: (configService: ConfigService) => ({
                type: 'postgres',
                host: configService.get('DB_HOST'),
                port: parseInt(configService.get('DB_PORT'), 10) || 5432,
                username: configService.get('DB_USERNAME'),
                password: configService.get('DB_PASSWORD'),
                database: configService.get('DB_DATABASE'),
                entities: [__dirname + '/**/*.entity{.ts,.js}'],
                synchronize: configService.get('NODE_ENV') === 'development',
            }),
            inject: [ConfigService],
        }),

        // GraphQL Module
        GraphQLModule.forRootAsync<ApolloDriverConfig>({
            driver: ApolloDriver,
            imports: [ConfigModule],
            useFactory: (configService: ConfigService) => ({
                autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
                sortSchema: true,
                playground: configService.get('GRAPHQL_PLAYGROUND') === 'true',
                debug: configService.get('GRAPHQL_DEBUG') === 'true',
                context: ({ req, res }) => ({ req, res }),
            }),
            inject: [ConfigService],
        }),

        // Feature Modules
        AuthModule,
        UsersModule,
    ],
})
export class AppModule { }
