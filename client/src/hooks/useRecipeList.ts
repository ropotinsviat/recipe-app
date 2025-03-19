"use client";

import { useEffect, useState } from "react";
import { recipeService } from "../services/recipeService";
import { RecipeCard } from "@/types/recipe";

export function useRecipeList(filterType?: string, filterValue?: string) {
  const [recipes, setRecipes] = useState<RecipeCard[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchRecipes() {
      setIsLoading(true);
      setError(null);

      try {
        const data = await recipeService.fetchRecipes(filterType, filterValue);
        console.log("API Response:", data);
        setRecipes(data.meals || []);
      } catch (err) {
        setError("Failed to fetch recipes");
      } finally {
        setIsLoading(false);
      }
    }

    fetchRecipes();
  }, [filterType, filterValue]);

  return { recipes, isLoading, error };
}
