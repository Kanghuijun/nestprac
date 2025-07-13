import { Controller, Get, Patch, Param } from '@nestjs/common';

@Controller('restaurant/member')
export class MemberController {
  @Get('/:id')
  getMemberMenu(@Param('id') id: string) {
    return '';
  }

  @Patch('delivery-confirmation/:id')
  patch3Progress(@Param('id') id: string) {
    return 'return 필요없을듯';
  }
}
