import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Dashboard from "./pages/dashboard/page";
import Login from "./pages/login/page";
import NewPyq from "./pages/new/page";
import PyqPage from "./pages/pyq/page";
import PrivateRoute from "./components/PrivateRoutes";
import AdminProfilePage from "./pages/profile/page";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route element={<PrivateRoute />}>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="/new" element={<NewPyq />} />
            <Route
              path="/pyq/:id"
              element={<PyqPage />}
            />
            <Route path="profile" element={<AdminProfilePage/>} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
