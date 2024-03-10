import Image from 'next/image'
import clsx from 'clsx'

interface ShoeCardProps {
  value: any
  changeBigShoeImage: (image: string) => void
  bigShoeImg: any
}

const ShoeCard = ({ value, changeBigShoeImage, bigShoeImg }: ShoeCardProps) => {
  
  const handleClick = () => {
    if (bigShoeImg !== value.bigShoe)
      changeBigShoeImage(value.bigShoe)
  }

  return (
    <div 
      className={clsx(
        'border-2 rounded-xl cursor-pointer max-sm:flex-1',
        {
          'border-coral-red': bigShoeImg === value.bigShoe
        }
      )}
      onClick={handleClick}

    >
      <div className='flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4'>
        <Image 
          alt='Shoe collection' 
          width={127} height={103} 
          src={value.thumbnail}
          className='object-contain'
        />
      </div>
    </div>
  )
}

export default ShoeCard