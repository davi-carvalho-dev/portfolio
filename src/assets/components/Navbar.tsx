
export default function Navbar(){
    return(
        <div className=" flex items-center justify-between px-10">
            <nav className="flex items-center justify-between w-full">
                
                {/* Div Fluída com loogo e span */}
                <div className="">
                    <button className="">

                    </button> 
                    <span className=" absolute ">Davi Carvalho</span>  
                </div>
                
                <ul className="flex items-center justify-between space-x-10">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="#servicos">Serviços</a></li>
                    <li><a href="#contato">Contato</a></li>
                </ul>

                <button aria-label="English" className="flex items-center space-between min-w-[64px] border-radius padding" data-v-73579746="">
                    <span data-v-73579746="">ENG</span>
                    <i data-v-73579746="" data-v-7432ef0f="">
                        <span className="inline-block width height no-repeat " aria-hidden="true" data-v-7432ef0f=""></span>
                    </i>   
                </button>
            </nav>
        </div>
    )
}
