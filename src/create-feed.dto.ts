import { IsString, IsNotEmpty, MinLength, MaxLength } from 'class-validator';

export class CreateFeedDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  @MaxLength(50)
  name: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  @MaxLength(1000)
  content: string;
}
