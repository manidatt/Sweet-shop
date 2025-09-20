import { useNavigate } from "react-router-dom";
import { clearAuth, getRole } from "../utils/Auth";
import "../App.css";

export default function Navbar() {
  const navigate = useNavigate();
  const role = getRole();

  const handleLogout = () => {
    clearAuth();
    navigate("/");
  };

  return (
    <nav className="navbar">
      <h2>Sweet Shop</h2>
      <div>
        <span className="role">{role}</span>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </nav>
  );
}
