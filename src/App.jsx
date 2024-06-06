// IMPORTAÇÃO DE COMPONENTS
import Header from "./components/Header/Header";
import SideBar from "./components/SideBar/SideBar";
import { Global } from "./styles/Global";


function App() {
  return (
    <>
      <Global />
      <Header />
      <SideBar />

    </>
  );
}

export default App;
