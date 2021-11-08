// nest cli created
// nest generate controller messages/messages --flat
import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';
import { MessagesService } from './messages.service';

// pass the rout message in the controller
@Controller('messages')
export class MessagesController {
  messageService: MessagesService;

  constructor() {
    // NOT USE THIS
    this.messageService = new MessagesService();
  }

  // GET
  @Get('/')
  listMessages() {
    return this.messageService.findAll();
  }

  @Get('/:id')
  getMessage(@Param('id') id: any) {
    return this.messageService.findOne(id);
  }

  // POSTS
  @Post('/')
  createMessage(@Body() body: CreateMessageDto) {
    // pass the deinfed body content from the dto
    return this.messageService.createOne(body.content);
  }
}
