export class CurrentFoodRoomsResponseDto {
  id: number;
  restaurantName: string;
  deliveryFee: number;
  minUser: number; //api에서는 maxUser로 되어있음 db는 minmember 의미 통일해야할듯
  currentUsers: number;
  deadline: string;
  imageUrl: string;
}
