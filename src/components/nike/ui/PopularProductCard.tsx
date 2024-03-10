import Image from "next/image"

interface PopularProductCardProps {
  imgUrl: any
  name: string
  price: string
}

const PopularProductCard = ({ imgUrl, name, price }: PopularProductCardProps) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
      <Image 
        alt={name}
        src={imgUrl}
        width={280}
        height={280}
        className="w-[280px] h-[280px]"
      />
      <div className='mt-8 flex justify-start gap-2.5'>
        <Image alt='Rating' width={24} height={24} src='/nike/assets/icons/star.svg' />
        <p className="font-montserrat text-xl leading-normal text-slate-gray ">(4.5)</p>
      </div>
      <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">{name}</h3>
      <p className="mt-2 font-semibold font-montserrat text-coral-red text-2xl leading-normal">{price}</p>
    </div>
  )
}

export default PopularProductCard