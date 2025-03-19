export default function RecipesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <header className="bg-gray-100 p-4">
        <h2 className="text-xl font-bold">Recipes</h2>
      </header>
      <div className="py-6">{children}</div>
    </div>
  );
}
