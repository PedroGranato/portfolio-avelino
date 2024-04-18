import { Button } from "@/components/ui/button"
import { ChevronDownIcon } from "@radix-ui/react-icons"

function App() {
  return (
    <div className="overflow-hidden bg-sky-100 flex flex-col relative">
      <div className="w-screen h-screen flex justify-center items-center">
        <div className="flex">
          <div>
          <img className="animate-fade animate-infinite animate-duration-[3ms] animate-delay-0 animate-normal absolute top-0 left-0  object-cover opacity-75" src="nuvem.png"/>

          <img className="absolute top-0 right-0 object-cover opacity-75" src="nuvem.png"/>
          </div>
          <div>
            <img className=" w-80 h-96 rounded-xl" src="avelino.png" alt="Avelino" />
          </div>
          <div className="flex justify-around flex-col gap-12">
            <div className="flex flex-col gap-10 ml-10 items-center">
              <h1 className="text-5xl font-bold">Felipe Silva Avelino</h1>
              <p className="mt-2">Especializado em História, Sociedade e Cultura pela PUC-SP em 2008</p>
            </div>
            <div className="flex justify-center items-center">
              <a href="#about-me">
                <Button className="animate-bounce h-15 w-40 bg-red-400 bg-gradient-to-r rounded-xl relative flex h-[50px] items-center justify-center overflow-hidden font-medium text-white transition-all duration-1000 before:absolute before:inset-0 before:border-0 before:border-white before:duration-100 before:ease-linear hover:bg-white hover:text-red-400 hover:before:border-[25px]" >
                  <span className="flex relative z-10">
                    Sobre Mim <ChevronDownIcon className="mt-0.5 ml-4"/>
                  </span>
                </Button> 
              </a>
            </div>
          </div>
        </div>
      </div>

      <img className="absolute bottom-0 left-[-230px] transform scale-x-[-1]" src="houses/predio.png" alt="Favela" width={350} />
      <img className="absolute bottom-0 ml-[200px]" src="houses/casasEscadas.png" alt="Favela" width={350} />
      <img className="absolute bottom-0" src="houses/vendas.png" alt="Favela" width={350} />
      <img className="absolute bottom-0 ml-[150px]" src="houses/casaDupla.png" alt="Favela" width={300} />

      <img className="absolute bottom-0 right-[-230px]" src="houses/vendas.png" alt="Favela" width={350} />
      <img className="absolute bottom-0 right-[180px] transform scale-x-[-1]" src="houses/vendinha.png" alt="Favela" width={350} />
      <img className="absolute bottom-0 right-0 transform scale-x-[-1]" src="houses/predio.png" alt="Favela" width={350} />
      <img className="absolute bottom-0 right-[100px] transform scale-x-[-1]" src="houses/casaVaranda.png" alt="Favela" width={300} />
    </div>
  )
}

export default App
