import { Route, Routes } from "react-router-dom";
import { Home, SignIn } from "../pages/Auth";

const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default AuthRoutes;
