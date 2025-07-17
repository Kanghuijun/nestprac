import { Type } from 'class-transformer';

class foodOrderInformationDto {
  itemName: string;
  quantity: number;
  price: number;
}

class joinUserInformationDto {
  userId: number;
  userName: string;
  @Type(() => foodOrderInformationDto)
  foodOrder: foodOrderInformationDto[];
}

export class foodRoomLeaderResponseDto {
  restaurantName: string;
  minUser: number;
  deadline: string;
  deliveryFee: number;
  @Type(() => joinUserInformationDto)
  user: joinUserInformationDto[];
}
