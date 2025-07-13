import { Injectable } from '@nestjs/common';
import { FoodFareRoomDto } from './dto/create-food-fare-room.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { FoodFareRoom } from './entities/test.entity';
import { Repository } from 'typeorm';
import { NotFoundException } from '@nestjs/common';

@Injectable()
export class RestaurantService {
  constructor(
    @InjectRepository(FoodFareRoom)
    private foodFareRoomRepo: Repository<FoodFareRoom>,
  ) {}

  async createTest(dto: FoodFareRoomDto) {
    const test = this.foodFareRoomRepo.create({
      restaurant_id: dto.restaurant_id,
      deadline: dto.deadline,
      min_member: dto.min_member,
    });
    return this.foodFareRoomRepo.save(test);
  }

  async getTest() {
    return this.foodFareRoomRepo.find();
  }

  async patchTest(id: number, dto: Partial<FoodFareRoomDto>) {
    const test = await this.foodFareRoomRepo.preload({
      id,
      ...dto,
    });
    if (!test) {
      throw new NotFoundException({ id, message: 'FoodFareRoom not found' });
    }
    return this.foodFareRoomRepo.save(test);
  }

  async deleteTest(id: number) {
    return this.foodFareRoomRepo.delete(id);
  }
}
