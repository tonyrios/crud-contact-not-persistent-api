import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateContactDto, UpdateContactDto } from '../../dtos/contact.dto';
import { Contact } from '../../models/contact';
import { randomUUID } from 'crypto';
import { ContactResponse } from '../../dtos/contact-response.dto';

const contactDatabase: Contact[] = [];

@Injectable()
export class ContactService {
  getAll() {
    return contactDatabase;
  }

  get(id: string): ContactResponse {
    const contactFound = contactDatabase.find((contact) => contact.id === id);

    if (!contactFound) {
      throw new NotFoundException(`contactId  #${id} doesn't exist`);
    }

    return contactFound;
  }

  create(data: CreateContactDto): ContactResponse {
    const newContant = { id: randomUUID(), ...data };
    contactDatabase.push(newContant);
    return newContant;
  }

  update(id: string, partialData: UpdateContactDto): ContactResponse {
    const indexFound = contactDatabase.findIndex(
      (contact) => contact.id === id,
    );

    if (indexFound < 0) {
      throw new NotFoundException(`contactId  #${id} doesn't exist`);
    }

    contactDatabase[indexFound] = {
      ...contactDatabase[indexFound],
      ...partialData,
    };
    return contactDatabase[indexFound];
  }

  delete(id: string) {
    const indexFound = contactDatabase.findIndex(
      (contact) => contact.id === id,
    );

    if (indexFound < 0) {
      throw new NotFoundException(`contactId  #${id} doesn't exist`);
    }

    contactDatabase.splice(indexFound, 1);
    return;
  }
}
