import type { Metadata } from "next";
import "./nike.css";

export const metadata: Metadata = {
  title: "Site de exemplo da Nike",
  description: "Montando um site da Nike usando Tailwind no NextJS/Typescript",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}
