import { Routes, Route } from "react-router-dom";
import CadastroFornecedor from "./pages/CadastroFornecedor/CadastroFornecedor";
import CadastroProduto from "./pages/CadastroProduto/CadastroProduto";

// import EntradaProduto from './pages/EntradaProduto/EntradaProduto';
// import RetiradaProduto from './pages/RetiradaProduto/RetiradaProduto';
// import Movimentacoes from './pages/Movimentacoes/Movimentacoes';
// import PainelControle from './pages/PainelControle/PainelControle';
// import ProdutosCadastrados from './pages/ProdutosCadastrados/ProdutosCadastrados';
// import EntradasCadastradas from './pages/EntradasCadastradas/EntradasCadastradas';
// import RetiradasCadastradas from './pages/RetiradasCadastradas/RetiradasCadastradas';
// import Login from './pages/Login/Login';

export default () => {
  return (
    <Routes>
      <Route index element={<CadastroFornecedor />} />
      <Route path="/cadastro-fornecedor" element={<CadastroFornecedor />} />
      <Route path="/cadastro-produto" element={<CadastroProduto />} />
      {/* <Route path="/cadastro-usuario" element={<CadastroUsuario />} /> */}
      {/* <Route path='/entrada' element={<EntradaProduto />} />
          <Route path='/retirada' element={<RetiradaProduto />} />
          <Route path='/produtos-cadastrados' element={<ProdutosCadastrados />} />
          <Route path='/movimentacoes' element={<Movimentacoes />} />
          <Route path='/entradas-cadastradas' element={<EntradasCadastradas />}/>
          <Route path='/retiradas-cadastradas' element={<RetiradasCadastradas />}/>
          <Route path='/painel-controle' element={<PainelControle />} />
          <Route path='/login' element={<Login />} /> */}
    </Routes>
  );
};
