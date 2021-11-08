import { MessagesRepository } from './messages.respository';

export class MessagesService {
  messagesRepo: MessagesRepository;
  constructor() {
    // Service is creating its own dependencies
    // DON'T DO THIS ON PRODUCTION !!
    this.messagesRepo = new MessagesRepository();
  }

  findOne(id: string) {
    return this.messagesRepo.findOne(id);
  }
  findAll() {
    return this.messagesRepo.findAll();
  }
  createOne(content: string) {
    return this.messagesRepo.createOne(content);
  }
}
