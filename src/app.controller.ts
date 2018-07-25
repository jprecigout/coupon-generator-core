import { Get, Controller } from '@nestjs/common';

@Controller()
export class AppController {
  constructor() {}

  @Get('/hearth')
  root(): string {
    return 'Alive !';
  }
}
