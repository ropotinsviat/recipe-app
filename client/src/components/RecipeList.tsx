import { RecipeCard as RecipeCardType } from "@/types/recipe";
import RecipeCard from "./RecipeCard";

interface RecipeListProps {
  recipes: RecipeCardType[];
}

export default function RecipeList({ recipes }: RecipeListProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.idMeal} {...recipe} />
      ))}
    </div>
  );
}
