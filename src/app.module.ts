import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { enviroments } from './environments';
import { ContentCardModule } from './modules';
import { ContactModule } from './modules/contact/contact.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: enviroments[process.env.NODE_ENV] || '.env',
      isGlobal: true,
    }),
    ContentCardModule,
    ContactModule,
  ],
})
export class AppModule {}
