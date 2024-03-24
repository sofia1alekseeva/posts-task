import { HashRouter } from "react-router-dom";
import AppRoutes from "./app-routes/app-routes";

const App = () => {
  return (
    <HashRouter>
      <AppRoutes />
    </HashRouter>
  );
};

export default App;
