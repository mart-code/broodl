import Dashboard from "@/components/Dashboard";
import Login from "@/components/Login";
import Loading from "@/components/Loading";
import Main from "@/components/Main";

export const metadata = {
  title: "Broodl . Dashboard",
};

export default function DashboardPage() {
  const isAuthenticated = true;
  return (
    <Main>
      <Dashboard />
    </Main>
  );
}
