import Rotas from "./Pages/routes";
import { AllProviders } from "./Contexts/AllProviders";

function App () {
  return ( 
    <AllProviders>
      <Rotas />
    </AllProviders>
  );
};

export default App;


//projeto modelo
//https://todoist.com/pt-BR