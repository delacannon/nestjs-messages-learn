// nest cli created
// nest generate controller messages/messages --flat
import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  NotFoundException,
} from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';
import { MessagesService } from './messages.service';

// pass the rout message in the controller
@Controller('messages')
export class MessagesController {
  constructor(public messageService: MessagesService) {}

  // GET
  @Get('/')
  listMessages() {
    return this.messageService.findAll();
  }

  @Get('/:id')
  async getMessage(@Param('id') id: any) {
    const message = await this.messageService.findOne(id);
    if (!message) {
      throw new NotFoundException('message not found');
    }
    return message;
  }

  // POSTS
  @Post('/')
  createMessage(@Body() body: CreateMessageDto) {
    // pass the deinfed body content from the dto
    return this.messageService.createOne(body.content);
  }
}
