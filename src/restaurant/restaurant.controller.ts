import { Controller, Get, Post, Param, Body } from '@nestjs/common';
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
    return this.restaurantService.createFoodFareRoom(dto);
  }

  @Get('user-list/:id')
  getUsersInRoom(@Param('id') roomId: string) {
    return `방 ${roomId}에 참여한 유저 목록`;
  }
}
