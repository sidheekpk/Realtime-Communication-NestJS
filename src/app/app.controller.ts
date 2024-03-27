import { Controller, Get, Render } from '@nestjs/common';

@Controller()
export class AppController {
  getHello(): any {
    throw new Error('Method not implemented.');
  }
  @Get()
  @Render('index')
  root() {
    return { message: 'Hello world!' };
  }
}
