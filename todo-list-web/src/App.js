import Rotas from "./Pages/routes";
import { AuthProvider } from "./Contexts/auth";
import { AllProviders } from "./Contexts/AllProviders";

function App () {
  return (
    //<AuthProvider>
    //  <Rotas />
    //</AuthProvider>    
    <AllProviders>
      <Rotas />
    </AllProviders>
  );
};

export default App;
