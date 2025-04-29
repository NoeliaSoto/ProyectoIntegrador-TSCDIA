import Saludo from "./Componentes/Saludo"
import Presentacion from "./Componentes/Presentacion"

function App() {
  return (
    <><Saludo nombre="Martín" />
    <Presentacion nombre="Martín" edad={28} profesion="Arquitecto" />
    </>
  );
}
export default App;
