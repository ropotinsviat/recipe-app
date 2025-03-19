"use-client";

export default function HomePage() {
  return (
    <div>
      <h1 className="text-2xl font-bold">Welcome to the Recipe App</h1>
      <p className="mt-4">
        Explore delicious recipes from around the world!{" "}
        <a href="/recipes" className="text-blue-500 hover:underline">
          Go to the recipies
        </a>
      </p>
    </div>
  );
}
