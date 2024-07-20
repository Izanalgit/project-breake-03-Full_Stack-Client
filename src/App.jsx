
import AppRoutes from "./routes/AppRoutes";
import { AppProvaider } from "./context/AppContext";

const App = () => {

  return (
    <AppProvaider>
        <AppRoutes />
    </AppProvaider>
  )
};

export default App;