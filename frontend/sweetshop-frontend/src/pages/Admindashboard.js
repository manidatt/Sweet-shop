import Navbar from "../components/Navbar";
import SweetsList from "../components/SweetsList";

export default function AdminDashboard() {
  return (
    <>
      <Navbar />
      <SweetsList isAdmin={true} />
    </>
  );
}
