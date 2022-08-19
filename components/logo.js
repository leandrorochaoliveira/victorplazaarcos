
import Image from 'next/image'
import Link from 'next/link'
// import { Container } from './styles';

export default function Logo() {
  return (
    <div className='text-center grow'>
        <Link href="/">
          <a className='w-full max-w-[90%] h-16 sm:h-[100px] inline-block m-auto' >
            <span style={{display: 'block', width: '100%', height: '100%', position: 'relative'}}>
            <Image
              src="/logo.png"
              alt="Logo"
              layout="fill" objectFit="contain" />
            </span>
          </a>
        </Link>
    </div>
  )
}
