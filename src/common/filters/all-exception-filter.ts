import { ArgumentsHost, Catch, Logger } from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';

/**
 * 처리되지 않는 모든 오류에 대한 표준화
 */
@Catch()
export class AllExceptionFilter extends BaseExceptionFilter {
  private readonly logger: Logger = new Logger(this.constructor.name);
  catch(exception: unknown, host: ArgumentsHost) {
    this.logger.error(exception);
    super.catch(exception, host);
  }
}
