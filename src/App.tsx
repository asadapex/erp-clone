import { useContext } from "react";
import { Context } from "./context/Context";
import AuthRoutes from "./routes/AuthRoutes";
import DashboardLayout from "./features";

function App() {
  const { token } = useContext(Context);

  return <>{token ? <DashboardLayout /> : <AuthRoutes />}</>;
}

export default App;
