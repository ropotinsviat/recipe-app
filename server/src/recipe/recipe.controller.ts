import { Controller, Get, Post, Param, Body, Query } from '@nestjs/common';
import { RecipeService } from './recipe.service';
import { GetAvailableRecipesDto } from './dto/get-available-recipes.dto';

@Controller('recipes')
export class RecipeController {
  constructor(private readonly recipeService: RecipeService) {}

  @Get()
  async getAvailableRecipes(@Query() query: GetAvailableRecipesDto) {
    return this.recipeService.getAvailableRecipes(
      query.filterType,
      query.filterValue,
    );
  }

  @Get(':id')
  async getRecipeInfo(@Param('id') id: string) {
    return this.recipeService.getRecipeInfo(id);
  }
}
