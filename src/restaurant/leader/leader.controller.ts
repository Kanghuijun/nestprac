import { Controller, Get, Param, Patch } from '@nestjs/common';

@Controller('restaurant/leader')
export class LeaderController {
  @Get(':id')
  getFoodFareRoom(@Param('id') id: string) {
    return '방정보';
  }

  @Patch('update-progress/:id')
  patch3Progress(@Param('id') id: string) {
    return '해당 방 번호에서 progress 3변경.. return 필요한가?';
  }

  @Patch('break-up/:id')
  patch4progress(@Param('id') id: string) {
    return '해당 방 번호에서 progress 4변경.. return 필요한가?';
  }
}
