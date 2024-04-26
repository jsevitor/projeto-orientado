
export default function SideBarMenu() {
    
    return(
        <nav className="nav_menu bg-secondary w-80 pt-20 pr-4">
            <ul className="menu flex flex-col gap-4">
                <li className="menu-option">
                    <a href="">
                        <h2>Painel de Controle</h2>
                    </a>
                </li>
                <li className="menu-option">
                    <a href="">
                        <h2>Produtos</h2>
                    </a>
                </li>
                <li className="menu-option">
                    <a href="">
                        <h2>Cadastros</h2>
                    </a>
                </li>
                <li className="menu-option">
                    <a href="">
                        <h2>Movimentações</h2>
                    </a>
                </li>
            </ul>
        </nav>
    );
}