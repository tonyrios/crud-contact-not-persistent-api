import { Module } from '@nestjs/common';
import { ContactController } from './controllers/contact/contact.controller';
import { ContactService } from './services/contact/contact.service';

@Module({
  controllers: [ContactController],
  providers: [ContactService],
})
export class ContactModule {}
