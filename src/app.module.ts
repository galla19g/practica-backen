import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { CommonModule } from './common/common.module';
import { DatabaseModule } from './database/database.module';
import { UsersModule } from './users/users.module';
import { EstudianteModule } from './estudiantes/estudiante.module';
import { AppController } from './app.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    CommonModule,
    DatabaseModule,
    UsersModule,
    AuthModule,
    EstudianteModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
