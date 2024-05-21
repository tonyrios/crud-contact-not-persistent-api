import { Test, TestingModule } from '@nestjs/testing';
import { ContactController } from './contact.controller';
import { ContactService } from '../../services/contact/contact.service';
import { NotFoundException } from '@nestjs/common';

const mockContact = {
  name: 'mockName',
  telephone: '2323232323',
};

const uuidRegex =
  /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/;

describe('ContactController', () => {
  let controller: ContactController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ContactController],
      providers: [ContactService],
    }).compile();

    controller = module.get<ContactController>(ContactController);
  });

  it('should make a crud of a contact', () => {
    expect(controller).toBeDefined();
    const createdContact = controller.create(mockContact);
    expect(createdContact).toStrictEqual({
      id: expect.stringMatching(uuidRegex),
      ...mockContact,
    });
    expect(controller.get(createdContact.id)).toStrictEqual(createdContact);
    const expectedUpdatedContact = { ...createdContact, name: 'Another name' };
    expect(
      controller.update(createdContact.id, { name: 'Another name' }),
    ).toStrictEqual(expectedUpdatedContact);
    expect(controller.delete(createdContact.id)).toBe(undefined);
    try {
      controller.get(createdContact.id);
    } catch (err) {
      expect(err).toStrictEqual(
        new NotFoundException(`contactId  #${createdContact.id} doesn't exist`),
      );
    }
  });
});
