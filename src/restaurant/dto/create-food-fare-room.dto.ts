import { IsInt, IsISO8601 } from 'class-validator';
export class FoodFareRoomDto {
  @IsInt()
  restaurant_id: number;
  
  @IsInt()
  min_number: number;

  @IsISO8601()
  deadline: string;
}
