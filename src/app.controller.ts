import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  UseFilters,
} from '@nestjs/common';
import { AppService } from './app.service';
import { HttpExceptionFilter } from './common/filters/http-exception-filter';

@Controller()
@UseFilters(HttpExceptionFilter)
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/exceptions/http')
  throwHttpException(): string {
    throw new HttpException('SomethingWrong', HttpStatus.INTERNAL_SERVER_ERROR);
  }

  @Get('/exception/unknown')
  throwError(): string {
    throw new Error('SomethingWrong');
  }
}
