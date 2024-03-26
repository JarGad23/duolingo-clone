import { isAdmin } from "@/lib/auth";
import dynamic from "next/dynamic";
import { redirect } from "next/navigation";

const App = dynamic(() => import("./_components/app"), { ssr: false });

const AdminPage = () => {
  const admin = isAdmin();
  if (!admin) {
    redirect("/");
  }

  return <App />;
};

export default AdminPage;
