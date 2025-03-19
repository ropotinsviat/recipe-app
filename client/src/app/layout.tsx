import "./globals.css";
import Header from "@/components/Header";

export const metadata = {
  title: "Recipe App",
  description: "Discover and browse recipes",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="container mx-auto py-6">{children}</main>
      </body>
    </html>
  );
}
