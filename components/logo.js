
import Image from 'next/image'
import Link from 'next/link'
// import { Container } from './styles';

export default function Logo() {
  return (
    <div className='text-center'>
        <Link href="/">
          <a className='max-w-[90%] h-auto inline-block m-auto' >
            <Image  src="/logo.png" alt="Logo" width={190} height={100} />
          </a>
          </Link>
    </div>
  )
}
