import { Monda } from "next/font/google";
import Navbar from "@/components/navbars/navBar";
const monserrat = Monda({ subsets: ["latin"] });

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className={`${monserrat.className} antialiased`}>
      <Navbar />
      {children}
    </main>
  );
}