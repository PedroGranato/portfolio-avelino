import { motion } from 'framer-motion';
import ButtonR from './components/buttonR';
import Cloud from './components/cloud';

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

function App() {
  return (
    <div className="overflow-hidden bg-sky-100 flex flex-col relative z-0">
      <div className="w-screen h-screen flex justify-center items-center gap-10">
          <div>
            <Cloud src="nuvem.png" alt="nuvem" style={{top: "-150px"}} delay={2} ></Cloud>
            <Cloud src="nuvem.png" alt="nuvem" style={{top: "150px"}} delay={6}></Cloud>
            <Cloud src="nuvem.png" alt="nuvem" style={{top: "350px"}} delay={0}></Cloud>
            <Cloud src="nuvem.png" alt="nuvem" style={{top: "-80px"}} delay={18} ></Cloud>
            <Cloud src="nuvem.png" alt="nuvem" style={{top: "0px"}} delay={10}></Cloud>
            <Cloud src="nuvem.png" alt="nuvem" style={{top: "500px"}} delay={15}></Cloud>
          </div>
          <div>
              <Avatar className='w-[200px] h-[200px] z-10'>
                <AvatarImage src="avelino.png" />
              </Avatar>
          </div>
          <div className="flex justify-around flex-col gap-12">
            <div className="flex flex-col gap-10 items-center">
              <h1 className="text-5xl font-bold mb-4 z-10">Felipe Silva Avelino</h1>
              <p className="mt-2 z-10">Especializado em História, Sociedade e Cultura pela PUC-SP em 2008</p>
            </div>
            <div className="flex justify-center items-center">
              <a href="#about-me">
                <ButtonR></ButtonR> 
              </a>
            </div>
          </div>
      </div>
      <motion.img 
        initial={{ opacity: 0, x: "-100vw" }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 2, delay: 0.1 }}
        className="absolute bottom-0 ml-[-220px] transform scale-x-[-1]"
        src="houses/predio.png"
        alt="Favela"
        width={350}
      />
      <motion.img
        initial={{ opacity: 0, x: "-100vw" }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 2, delay: 0.2 }}
        className="absolute bottom-0 ml-[-45px]"
        src="houses/casasEscadas.png"
        alt="Favela"
        width={350}
      />
      <motion.img
        initial={{ opacity: 0, x: "-100vh" }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="absolute bottom-0 ml-[190px]"
        src="houses/vendas.png"
        alt="Favela"
        width={350}
      />
      <motion.img
        initial={{ opacity: 0, x: "-100vh" }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 2, delay: 0.3 }}
        className="absolute bottom-0 ml-[90px]"
        src="houses/casaDupla.png"
        alt="Favela"
        width={300}
      />


      <motion.img 
        initial={{ opacity: 0, x: "100vw" }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 2, delay: 0.1 }}
        className="absolute bottom-0 right-[-230px]"
        src="houses/vendas.png"
        alt="Favela"
        width={350}
      />
      <motion.img
        initial={{ opacity: 0, x: "100vh" }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="absolute bottom-0 right-[250px]"
        src="houses/vendinha.png"
        alt="Favela"
        width={350}
      />
      <motion.img
        initial={{ opacity: 0, x: "100vh" }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 2, delay: 0.2 }}
        className="absolute bottom-0 right-[-30px] "
        src="houses/predioL.png"
        alt="Favela"
        width={350}
      />
      <motion.img
        initial={{ opacity: 0, x: "100vh" }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 2, delay: 0.3 }}
        className="absolute bottom-0 right-[100px]"
        src="houses/casaVaranda.png"
        alt="Favela"
        width={300}
      />
      <div>
      
      </div>
    </div>
  );
}

export default App;