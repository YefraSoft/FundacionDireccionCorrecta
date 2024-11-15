import { Monda } from "next/font/google";
import NavBar from "@/components/navbars/navBar";
import Footer from "@/components/navbars/footer";
const monserrat = Monda({ subsets: ["latin"] });

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className={`${monserrat.className} antialiased`}>
      <NavBar />
      {children}
      <Footer />
    </main>
  );
}
