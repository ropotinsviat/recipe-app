import { useRecipeList } from "@/hooks/useRecipeList";
import RecipeCard from "./RecipeCard";

interface SidebarProps {
  category: string;
}

export default function Sidebar({ category }: SidebarProps) {
  const { recipes, isLoading, error } = useRecipeList("category", category);

  return (
    <div className="min-w-[200px]">
      <h2 className="text-lg font-bold mb-4">
        Category:{" "}
        <a
          className="text-blue-500 hover:underline"
          href={`/recipes?filterType=category&filterValue=${category}`}
        >
          {category}
        </a>
      </h2>
      <ul className="flex flex-col gap-4">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.idMeal} {...recipe} />
        ))}
      </ul>
    </div>
  );
}
