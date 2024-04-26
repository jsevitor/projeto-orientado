import HeaderBar from "../../components/HeaderBar";
import SideBarMenu from "../../components/SideBarMenu";

export default function CadastroFornecedor() {

    return(
        <div>
            <HeaderBar />
           <div className="flex">
            <SideBarMenu />
            <div className="container bg-secondaryLight flex flex-col items-center justify-center">
                <div className="card bg-secondary">
                    <div className="header_card bg-primaryDark p-4">
                        Cadastro
                    </div>
                    <div className="body_card bg-secondary p-8 flex flex-wrap gap-4">
                        <span className="w-full">
                            <label htmlFor="">Nome</label>
                            <input type="text" className="w-full"/>
                        </span>

                        <span className="w-2/5">
                            <label htmlFor="">CNPJ</label>
                            <input type="text" className="w-full"/>
                        </span>

                        <span className="w-2/5">
                            <label htmlFor="">Telefone</label>
                            <input type="text" className="w-full"/>
                        </span>

                        <span className="w-2/5">
                            <label htmlFor="">CNPJ</label>
                            <input type="text" className="w-full"/>
                        </span>
                    </div>
                </div>
            </div>
           </div>
        </div>
    );
    
}