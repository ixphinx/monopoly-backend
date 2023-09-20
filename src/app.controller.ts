import { Body, Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/user')
  async getHello(
    @Body() body: { user: string; password: string; email: string },
    @Res({ passthrough: true }) res: Response,
  ) {
    try {
      await this.appService.createUser(body);
      res.status(HttpStatus.OK);
    } catch (err) {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
