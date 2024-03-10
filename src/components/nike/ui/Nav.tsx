import { navLinks } from '@/constants/main'
import Image from 'next/image'
import Link from 'next/link'

const Nav = () => {
  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
      <nav className='flex justify-between items-center max-container'>
        <Link href="/">
          <Image priority alt='Logo' width={130} height={29} src='/nike/assets/images/header-logo.svg' />
        </Link>
        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
          {navLinks.map((item,i) => (
            <li key={i}>
              <Link href={item.href} className='font-montserrat leading-normal text-lg text-slate-gray'>
                {item.label}
              </Link>
            </li>
          ) )}
        </ul>
        <div className='lg:hidden'>
          <Image alt='Hamburger' width={25} height={25} src='/nike/assets/icons/hamburger.svg' />
        </div>
      </nav>
    </header>
  )
}

export default Nav