import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class RecipeService {
  private readonly API_BASE =
    process.env.MEALDB_API_BASE || 'https://www.themealdb.com/api/json/v1/1';

  constructor(private readonly httpService: HttpService) {}

  async getAvailableRecipes(filterType?: string, filterValue?: string) {
    let url = `${this.API_BASE}/search.php?s=`;

    if (filterType && filterValue) {
      switch (filterType) {
        case 'ingredient':
          url = `${this.API_BASE}/filter.php?i=${filterValue}`;
          break;
        case 'country':
          url = `${this.API_BASE}/filter.php?a=${filterValue}`;
          break;
        case 'category':
          url = `${this.API_BASE}/filter.php?c=${filterValue}`;
          break;
      }
    }

    const response = await firstValueFrom(this.httpService.get(url));
    return response.data;
  }

  async getRecipeInfo(recipeId: string) {
    const url = `${this.API_BASE}/lookup.php?i=${recipeId}`;
    const response = await firstValueFrom(this.httpService.get(url));
    return response.data;
  }
}
