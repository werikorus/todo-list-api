import Rotas from "./Pages/routes";
import { AuthProvider } from "./Contexts/auth";

function App () {
  return (
    <AuthProvider>
      <Rotas />
    </AuthProvider>    
  );
};

export default App;
