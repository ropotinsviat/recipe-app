import { RecipeCard as RecipeCardType } from "@/types/recipe";

export default function RecipeCard({
  idMeal,
  strMeal,
  strMealThumb,
}: RecipeCardType) {
  return (
    <div className="border rounded shadow hover:shadow-lg p-4">
      <img
        src={strMealThumb}
        alt={strMeal}
        className="w-full h-48 object-cover rounded"
      />
      <h3 className="text-lg font-bold mt-4">{strMeal}</h3>
      <a href={`/recipes/${idMeal}`} className="text-blue-500 hover:underline">
        View Details
      </a>
    </div>
  );
}
