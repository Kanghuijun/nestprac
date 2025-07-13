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
    return '현재 생성된 방 전체';
  }

  @Get('list')
  getRestaurantList() {
    return '레스토랑 목록 전체';
  }

  @Post('food-fare-room')
  createFoodFareRoom(@Body() dto: FoodFareRoomDto) {
    return this.restaurantService.createTest(dto);
  }

  @Get('user-list/:id')
  getUsersInRoom(@Param('id') roomId: string) {
    return `방에 참여한 유저 목록`;
  }

  @Post('test')
  createTest(@Body() dto: FoodFareRoomDto) {
    return this.restaurantService.createTest(dto);
  }

  @Get('test')
  getTest() {
    return this.restaurantService.getTest();
  }

  @Patch('test/:id')
  patch(@Param('id') id: string, @Body() dto: Partial<FoodFareRoomDto>) {
    return this.restaurantService.patchTest(Number(id), dto);
  }

  @Delete('test/:id')
  deleteTest(@Param('id') id: string) {
    return this.restaurantService.deleteTest(Number(id));
  }
}
