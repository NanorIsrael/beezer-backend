import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.log(
      req.method + ' to ' + req.url + ' ' + new Date().toDateString(),
    );
    next();
  }
}
