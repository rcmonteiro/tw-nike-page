import Link from "next/link";

export default function Home() {
  return (
    <main className="flex h-screen justify-center items-center">
      <Link href="/menu">Menu de navegação</Link>      
    </main>
  );
}
