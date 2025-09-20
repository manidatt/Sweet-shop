// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import Auth from "./pages/Auth";
// import UserDashboard from "./pages/Userdashboard";
// import AdminDashboard from "./pages/Admindashboard";
// import { getToken, getRole } from "./utils/Auth";

// function App() {
//   const token = getToken();
//   const role = getRole();

//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Auth />} />
//         <Route
//           path="/user"
//           element={token && role === "USER" ? <UserDashboard /> : <Navigate to="/" />}
//         />
//         <Route
//           path="/admin"
//           element={token && role === "ADMIN" ? <AdminDashboard /> : <Navigate to="/" />}
//         />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from "./pages/Auth";
import UserDashboard from "./pages/Userdashboard";
import AdminDashboard from "./pages/Admindashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/user" element={<UserDashboard />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
