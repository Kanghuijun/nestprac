import { IsArray, IsBoolean, IsInt, IsString } from 'class-validator';

// class ParticipantDto {
//   @IsInt()
//   user_id: number;

//   @IsString()
//   name: string;

//   @IsInt()
//   student_number: number;

//   @IsBoolean()
//   is_creator: boolean;
// }

// export class userResponseDto {
//   @IsArray()
//   participants: ParticipantDto[];
//지금 api에는 이 이름으로 객체배열을 주는데.. 어차피 배열로 줄텐데 그냥 예시로 한건가... 예시로 생각하고 재작성.
// }

export class userResponseDto {
  @IsInt()
  user_id: number;

  @IsString()
  name: string;

  @IsInt()
  student_number: number;

  @IsBoolean()
  is_creator: boolean;
}
