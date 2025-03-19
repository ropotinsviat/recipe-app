"use client";

import { useEffect, useState } from "react";
import { recipeService } from "../services/recipeService";
import { Recipe } from "@/types/recipe";

export function useRecipe(recipeId: string) {
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchRecipe() {
      setIsLoading(true);
      setError(null);

      try {
        const data = await recipeService.fetchRecipeById(recipeId);
        console.log(data);
        setRecipe(data.meals?.[0] || null);
      } catch (err) {
        setError("Failed to fetch recipe");
      } finally {
        setIsLoading(false);
      }
    }

    fetchRecipe();
  }, [recipeId]);

  return { recipe, isLoading, error };
}
