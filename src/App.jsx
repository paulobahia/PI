import { AppRoutes } from "./routes/routes";
import { AuthProvider } from "./contexts/Auth";

const App = () => {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  );
};

export default App;
