"use client";

import RecipeList from "@/components/RecipeList";
import Loader from "@/components/Loader";
import ErrorMessage from "@/components/ErrorMessage";
import { useRecipeList } from "@/hooks/useRecipeList";
import { useSearchParams } from "next/navigation";

export default function RecipeListPage() {
  const searchParams = useSearchParams();
  const filterType = searchParams.get("filterType") || undefined;
  const filterValue = searchParams.get("filterValue") || undefined;

  const { recipes, isLoading, error } = useRecipeList(filterType, filterValue);

  const getPageTitle = () => {
    if (!filterType || !filterValue) return "All Recipes";
    return `Recipes filtered by ${filterType}: ${filterValue}`;
  };

  if (isLoading) return <Loader />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-6">{getPageTitle()}</h1>
      <RecipeList recipes={recipes} />
    </div>
  );
}
