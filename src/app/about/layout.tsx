import { Monda } from "next/font/google";
import DashboardProvider from "@/components/providers/dashboardProvider";
import NavBar from "@/components/navbars/navBar";
const monserrat = Monda({ subsets: ["latin"] });

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className={`${monserrat.className} antialiased`}>
      <DashboardProvider>
        <NavBar />
        {children}
      </DashboardProvider>
    </main>
  );
}
