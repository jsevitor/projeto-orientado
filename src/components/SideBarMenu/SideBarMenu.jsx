import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

import "./SideBarMenu.sass";

export default function SideBarMenu() {
  const [subMenus, setSubMenus] = useState({
    produtos: localStorage.getItem("isOpenProdutosSubMenu") === "true",
    cadastros: localStorage.getItem("isOpenCadastrosSubMenu") === "true",
    movimentacoes:
      localStorage.getItem("isOpenMovimentacoesSubMenu") === "true",
  });

  const [menuCollapsed, setMenuCollapsed] = useState(() => {
    return localStorage.getItem("menuCollapsed") === "true";
  });

  useEffect(() => {
    localStorage.setItem("isOpenProdutosSubMenu", subMenus.produtos);
    localStorage.setItem("isOpenCadastrosSubMenu", subMenus.cadastros);
    localStorage.setItem("isOpenMovimentacoesSubMenu", subMenus.movimentacoes);
    localStorage.setItem("menuCollapsed", menuCollapsed);
  }, [subMenus, menuCollapsed]);

  const toggleSubMenu = (menu) => {
    setSubMenus((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }));

    if (menuCollapsed) {
      setMenuCollapsed(false);
    }
  };

  const toggleMenu = () => {
    setMenuCollapsed(!menuCollapsed);

    if (subMenus.produtos || subMenus.cadastros || subMenus.movimentacoes) {
      setSubMenus({
        produtos: false,
        cadastros: false,
        movimentacoes: false,
      });
    }
  };

  return (
    <nav className={`nav_container ${menuCollapsed ? "collapsed" : ""}`}>
      <div id="hideMenu" onClick={toggleMenu}>
        <i
          className={`bx ${
            menuCollapsed ? "bx-chevron-right-circle" : "bx-chevron-left-circle"
          }`}
        ></i>
      </div>

      <div className="nav_group">
        <ul className="menu_list">
          <li className="list_item">
            <div className="nav_link">
              {/* <Link to="/" className="menu_option"> */}
              <i className="bx bx-home"></i>
              {!menuCollapsed && <h2>Início</h2>}
              {/* </Link> */}
            </div>
          </li>
          <li className="list_item">
            <div className="nav_link">
              {/* <Link
                to="#"
                className="menu_option"
                onClick={() => toggleSubMenu("produtos")}
              > */}
              <i className="bx bx-package"></i>
              {!menuCollapsed && <h2>Produtos</h2>}
              {!menuCollapsed && (
                <i
                  className={`bx ${
                    subMenus.produtos ? "bx-chevron-up" : "bx-chevron-down"
                  }`}
                ></i>
              )}
              {/* </Link> */}
            </div>
            {subMenus.produtos && (
              <ul
                className={`subMenu ${
                  subMenus.produtos ? "collapsedSubMenu" : ""
                }`}
              >
                <li className="nav_link">
                  {/* <Link to="/entrada"> */}
                  <h3>Entrada de Produtos</h3>
                  {/* </Link> */}
                </li>
                <li className="nav_link">
                  {/* <Link to="/retirada"> */}
                  <h3>Retirada de Produtos</h3>
                  {/* </Link> */}
                </li>
                <li className="nav_link">
                  {/* <Link to="/produtos-cadastrados"> */}
                  <h3>Produtos Cadastrados</h3>
                  {/* </Link> */}
                </li>
              </ul>
            )}
          </li>
          <li className="list_item">
            <div className="nav_link">
              {/* <Link
                to="#"
                className="menu_option"
                onClick={() => toggleSubMenu("cadastros")}
              > */}
              <i className="bx bx-id-card"></i>
              {!menuCollapsed && <h2>Cadastros</h2>}
              {!menuCollapsed && (
                <i
                  className={`bx ${
                    subMenus.cadastros ? "bx-chevron-up" : "bx-chevron-down"
                  }`}
                ></i>
              )}
              {/* </Link> */}
            </div>
            {subMenus.cadastros && (
              <ul
                className={`subMenu ${
                  subMenus.cadastros ? "collapsedSubMenu" : ""
                }`}
              >
                <li className="nav_link">
                  {/* <Link to="/fornecedor"> */}
                  <h3>Cadastro de Fornecedor</h3>
                  {/* </Link> */}
                </li>
                <li className="nav_link">
                  {/* <Link to="/produtos"> */}
                  <h3>Cadastro de Produtos</h3>
                  {/* </Link> */}
                </li>
                <li className="nav_link">
                  {/* <Link to="/usuario"> */}
                  <h3>Cadastro de Usuário</h3>
                  {/* </Link> */}
                </li>
              </ul>
            )}
          </li>
          <li className="list_item">
            <div className="nav_link">
              {/* <Link to="#" onClick={() => toggleSubMenu("movimentacoes")}> */}
              <i className="bx bx-transfer"></i>
              {!menuCollapsed && <h2>Movimentações</h2>}
              {!menuCollapsed && (
                <i
                  className={`bx ${
                    subMenus.movimentacoes ? "bx-chevron-up" : "bx-chevron-down"
                  }`}
                ></i>
              )}
              {/* </Link> */}
            </div>
            {subMenus.movimentacoes && (
              <ul
                className={`subMenu ${
                  subMenus.movimentacoes ? "collapsedSubMenu" : ""
                }`}
              >
                <li className="nav_link">
                  {/* <Link to="/movimentacoes"> */}
                  <h3>Movimentações</h3>
                  {/* </Link> */}
                </li>
                <li className="nav_link">
                  {/* <Link to="/entradas-cadastradas"> */}
                  <h3>Entradas Cadastradas</h3>
                  {/* </Link> */}
                </li>
                <li className="nav_link">
                  {/* <Link to="/retiradas-cadastradas"> */}
                  <h3>Retiradas Cadastradas</h3>
                  {/* </Link> */}
                </li>
              </ul>
            )}
          </li>
          <li className="list_item">
            <div className="nav_link">
              {/* <Link to="/painel-controle"> */}
              <i className="bx bx-cog"></i>
              {!menuCollapsed && <h2>Painel de Controle</h2>}
              {/* </Link> */}
            </div>
          </li>
        </ul>
      </div>

      <div className={`profile_container ${menuCollapsed ? "collapsed" : ""}`}>
        <span>
          <i className="bx bx-user-circle"></i>
          {!menuCollapsed && <h4>Fulano de Tal</h4>}
        </span>
        {/* <Link to={"/login"}> */}
        {!menuCollapsed && <i className="bx bx-exit exit"></i>}
        {/* </Link> */}
      </div>
    </nav>
  );
}
