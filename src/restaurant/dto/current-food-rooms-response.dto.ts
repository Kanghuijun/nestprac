import { IsInt, IsISO8601, IsString } from 'class-validator';

export class CurrentFoodRoomsResponseDto {
  @IsInt()
  id: number;

  @IsString()
  restaurantName: string;

  @IsInt()
  deliveryFee: number;

  @IsInt()
  minUser: number; //api에서는 maxUser로 되어있음 db는 minmember 의미 통일해야할듯

  @IsInt()
  currentUsers: number;

  @IsISO8601()
  deadline: string;

  @IsString()
  imageUrl: string;
}
