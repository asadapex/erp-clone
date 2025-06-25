import { Route, Routes } from "react-router-dom";
import { dashboardRoutes } from "../hooks/path";

const DashboardRoutes = () => {
  return (
    <Routes>
      {dashboardRoutes.map((item) => (
        <Route key={item.id} path={item.path} element={item.element} />
      ))}
    </Routes>
  );
};

export default DashboardRoutes;
