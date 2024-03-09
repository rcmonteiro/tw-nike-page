import MenuItem from "./MenuItem"
import { FaFire, FaPoo, FaLightbulb, FaUser } from 'react-icons/fa'

const Menu = () => {
  return (
    <div className="flex fixed m-0 bg-primary text-secondary shadow-lg left-0
                    flex-row w-screen h-16 top-auto bottom-0
                    sm:flex-col sm:w-16 sm:h-screen sm:top-0 sm:bottom-auto">
      <MenuItem icon={<FaUser size={24}/>} label="Minha conta"/>
      <MenuItem icon={<FaLightbulb size={24}/>} label="Crie!"/>
      <MenuItem icon={<FaFire size={24}/>} label="Novidades"/>
      <MenuItem icon={<FaPoo size={24}/>} label="Ooops..."/>
    </div>
  )
}

export default Menu