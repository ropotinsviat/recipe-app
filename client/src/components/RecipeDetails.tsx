import { Recipe } from "@/types/recipe";

interface RecipeDetailsProps {
  recipe: Recipe;
}

export default function RecipeDetails({ recipe }: RecipeDetailsProps) {
  if (!recipe) {
    return <p>No recipe details available.</p>;
  }

  return (
    <div className="flex gap-6 h-fit">
      <img
        src={recipe.strMealThumb}
        alt={recipe.strMeal}
        className="w-1/3 rounded object-cover h-fit"
      />
      <div className="flex-1">
        <h1 className="text-2xl font-bold">{recipe.strMeal}</h1>
        <p className="text-gray-600">
          <span>Country: </span>
          <a
            href={`/recipes?filterType=country&filterValue=${recipe.strArea}`}
            className="text-blue-500 hover:underline"
          >
            {recipe.strArea}
          </a>
        </p>
        <p className="mt-4">{recipe.strInstructions}</p>
        <h2 className="text-xl mt-6 font-bold">Ingredients</h2>
        <ul className="list-disc list-inside">
          {Array.from(
            { length: 20 },
            (_, i) => recipe[`strIngredient${i + 1}` as keyof Recipe]
          )
            .filter(Boolean)
            .map((ingredient, index) => (
              <li key={index}>
                <a
                  href={`/recipes?filterType=ingredient&filterValue=${ingredient}`}
                  className="text-blue-500 hover:underline"
                >
                  {ingredient}
                </a>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
