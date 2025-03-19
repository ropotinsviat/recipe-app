"use client";

import RecipeDetails from "@/components/RecipeDetails";
import Loader from "@/components/Loader";
import ErrorMessage from "@/components/ErrorMessage";
import { useRecipe } from "@/hooks/useRecipe";
import { use } from "react";
import Sidebar from "@/components/Sidebar";

export default function RecipeInfoPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const { recipe, isLoading, error } = useRecipe(id);

  if (isLoading) return <Loader />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div className="flex gap-4">
      {recipe && (
        <>
          <Sidebar category={recipe.strCategory} />
          <RecipeDetails recipe={recipe} />
        </>
      )}
    </div>
  );
}
