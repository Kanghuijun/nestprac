import { IsInt, IsISO8601, IsString } from 'class-validator';

export class listResponseDto {
  @IsInt()
  id: number;

  @IsString()
  restaurantName: string;

  @IsInt()
  deliveryFee: number;

  @IsString()
  imageUrl: string;

  @IsISO8601()
  businessHours: string;
}
