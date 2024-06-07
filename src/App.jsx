// IMPORTAÇÃO DE COMPONENTS
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import SideBar from "./components/SideBar/SideBar";
import { Global } from "./styles/Global";

function App() {
  return (
    <BrowserRouter>
      <Global />
      <Header />
      <SideBar />
    </BrowserRouter>
  );
}

export default App;
