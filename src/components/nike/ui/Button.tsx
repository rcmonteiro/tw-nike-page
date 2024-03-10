import Image from "next/image"

interface ButtonProps {
  label: string
  icon: string
}

const Button = ({ label, icon }: ButtonProps) => {
  return (
    <button className='flex justify-center items-center gap-2 px-7 py-4 font-montserrat text-lg leading-none bg-coral-red rounded-full border-coral-red text-white'>
      {label}
      <Image 
        alt={label}
        width={25} 
        height={25} 
        src={`/nike/assets/icons/${icon}.svg`}
        className='ml-2 rounded-full w-5 h-5' />
    </button>
  )
}
export default Button