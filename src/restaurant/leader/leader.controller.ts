import { Controller, Get, Param, Patch } from '@nestjs/common';

@Controller('restaurant/leader')
export class LeaderController {
  @Get(':id')
  getFoodFareRoom(@Param('id') id: string) {
    return {
      message: `${id}방 정보`,
    };
  }

  @Patch('update-progress/:id')
  patch3Progress(@Param('id') id: string) {
    return {
      message: `${id}방에서 progress 3으로 변경`,
    };
  }

  @Patch('break-up/:id')
  patch4progress(@Param('id') id: string) {
    return {
      message: `${id}방에서 progress 4로 변경`,
    };
  }
}
