import { IsOptional, IsString } from 'class-validator';

export class GetAvailableRecipesDto {
  @IsOptional()
  @IsString()
  filterType?: 'ingredient' | 'country' | 'category';

  @IsOptional()
  @IsString()
  filterValue?: string;
}
