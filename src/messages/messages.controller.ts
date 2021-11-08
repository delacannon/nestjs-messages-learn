// nest cli created
// nest generate controller messages/messages --flat
import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';
// pass the rout message in the controller
@Controller('messages')
export class MessagesController {
  // GET

  @Get('/')
  listMessages() {}

  @Get('/:id')
  getMessage(@Param('id') id: any) {
    console.log(id);
  }

  // POSTS
  @Post('/')
  createMessage(@Body() body: CreateMessageDto) {
    console.log(body);
  }
}
