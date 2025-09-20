import Navbar from "../components/Navbar";
import SweetsList from "../components/SweetsList";

export default function UserDashboard() {
  return (
    <>
      <Navbar />
      <SweetsList isAdmin={false} />
    </>
  );
}
