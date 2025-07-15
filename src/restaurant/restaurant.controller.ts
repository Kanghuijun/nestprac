import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  Delete,
  Patch,
} from '@nestjs/common';
import { FoodFareRoomDto } from './dto/create-food-fare-room.dto';
import { RestaurantService } from './restaurant.service';

@Controller('restaurant')
export class RestaurantController {
  constructor(private readonly restaurantService: RestaurantService) {}

  @Get('current-rooms')
  getCurrentRooms() {
    return {
      message: '현재 생성된 방 전체',
    };
  }

  @Get('list')
  getRestaurantList() {
    return {
      message: '레스토랑 목록 전체',
    };
  }

  @Post('food-fare-room')
  createFoodFareRoom(@Body() dto: FoodFareRoomDto) {
    return this.restaurantService.createTest(dto);
  }

  @Get('user-list/:id')
  getUsersInRoom(@Param('id') id: string) {
    return {
      message: `${id}방에 참여한 유저 목록`,
    };
  }

  @Post('test')
  async createTest(@Body() dto: FoodFareRoomDto) {
    return await this.restaurantService.createTest(dto);
  }

  @Get('test')
  async getTest() {
    return await this.restaurantService.getTest();
  }

  @Patch('test/:id')
  async patch(@Param('id') id: string, @Body() dto: Partial<FoodFareRoomDto>) {
    return await this.restaurantService.patchTest(Number(id), dto);
  }

  @Delete('test/:id')
  async deleteTest(@Param('id') id: string) {
    return await this.restaurantService.deleteTest(Number(id));
  }
}
