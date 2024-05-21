import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ContactService } from '../../services/contact/contact.service';
import { CreateContactDto, UpdateContactDto } from '../../dtos/contact.dto';
import { ApiOperation } from '@nestjs/swagger';

@Controller('contacts')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @ApiOperation({ summary: 'get a contact data by id' })
  @Get(':id')
  get(@Param('id') id: string) {
    return this.contactService.get(id);
  }

  @ApiOperation({ summary: 'create a contact' })
  @Post()
  create(@Body() payload: CreateContactDto) {
    return this.contactService.create(payload);
  }

  @ApiOperation({ summary: 'update a contact' })
  @Put(':id')
  update(@Param('id') id: string, @Body() payload: UpdateContactDto) {
    return this.contactService.update(id, payload);
  }

  @ApiOperation({ summary: 'delete a contact by id' })
  @Delete(':id')
  @HttpCode(204)
  delete(@Param('id') id: string) {
    return this.contactService.delete(id);
  }
}
