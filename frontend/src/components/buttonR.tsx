import { ChevronDownIcon } from "@radix-ui/react-icons"

const ButtonR = () => {
  return (
    <button className="animate-bounce h-15 w-40 bg-red-400 bg-gradient-to-r rounded-xl relative flex h-[50px] items-center justify-center overflow-hidden font-medium text-white transition-all duration-1000 before:absolute before:inset-0 before:border-0 before:border-white before:duration-100 before:ease-linear hover:bg-white hover:text-red-400 hover:before:border-[25px]">
      <span className="flex relative z-10" >
        Sobre Mim <ChevronDownIcon className="mt-1.5 ml-4 z-10"/>
      </span>
    </button>
  );
}

export default ButtonR;