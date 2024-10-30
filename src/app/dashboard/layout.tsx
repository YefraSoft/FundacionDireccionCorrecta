import { Ubuntu } from "next/font/google";
const ubuntu = Ubuntu({ subsets: ["latin"], weight: "300" });

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main
      className={`${ubuntu.className} antialiased bg-gradient-to-b from-white to-gray-100 h-dvh`}
    >
      {children}
    </main>
  );
}
