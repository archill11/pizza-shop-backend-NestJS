import { IsNotEmpty } from 'class-validator';

export class CreateCategoryeDto {
  @IsNotEmpty()
  list: string;
}
