import { useContext } from "react";
import { Context } from "./context/Context";
import AuthRoutes from "./routes/AuthRoutes";
import DashboardRoutes from "./routes/DashboardRoutes";

function App() {
  const { token } = useContext(Context);
  return <>{token ? <DashboardRoutes /> : <AuthRoutes />}</>;
}

export default App;
