import { Monda } from "next/font/google";
import DashboardProvider from "@/components/providers/dashboardProvider";
import NavDashboard from "@/components/navbars/navDashboard";
const monserrat = Monda({ subsets: ["latin"] });

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className={`${monserrat.className} antialiased`}>
      <DashboardProvider>
        <NavDashboard />
        {children}
      </DashboardProvider>
    </main>
  );
}
