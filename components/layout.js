import Image from 'next/image'
import Sidebar from '../components/sidebar'
import Slideshow from '../components/slideshow'
import { HeaderMobile } from '../components/headerMobile'
import { useMediaQuery } from 'react-haiku'

import Link from 'next/link';    

export default function Layout({ children }) {

  const breakpoint = useMediaQuery('(min-width: 640px)');

  const images = [
    '/background/1.jpg',
    '/background/2.jpg',
    '/background/3.jpg',
    '/background/4.jpg',
    '/background/5.jpg',
    '/background/6.jpg',
    '/background/7.jpg',
    '/background/8.jpg',
    '/background/9.jpg',
    '/background/10.jpg',
  ];

  return (
    <>
    <Slideshow images={images}></Slideshow>
    {breakpoint ?
      <div className="flex sm:ml-[1vw] md:ml-[5vw] lg:ml-[10vw] h-full bg-no-repeat bg-contain z-1 relative">
        <Sidebar></Sidebar>
        <div className='mt-3 flex flex-col flex-grow justify-between'>
          <div className='flex justify-end'>
            <div className='mr-3'>
              <Link href="https://www.facebook.com/hotelvictorplazaarcos" passHref={true}>
              <a target="_blank" className='flex align-middle justify-center w-[54px] h-[54px] bg-primary p-3 rounded'>
                <Image src="/facebook-f-brands.svg" alt="Logo" width={54} height={54} />
              </a>
              </Link>
            </div>
            <div className='mr-3'>
            
            <Link href="https://plus.google.com/108306834346190985653/about?gl=BR&hl=pt-BR" passHref={true}>
            <a target="_blank" className='flex align-middle justify-center w-[54px] h-[54px] bg-primary p-3 rounded'>
              <Image src="/location-dot-solid.svg" alt="Logo" width={54} height={54} />
            </a>
            </Link>
            </div>
            <div className='mr-3'>
              <div className='flex align-middle h-[54px] bg-primary p-3 rounded'>
                <Image src="/mobile-screen-solid.svg" alt="Logo" width={30} height={54} />
                <div className='flex flex-col ml-3 '>
                  <a className="text-white text-sm">(37) 3351-5560</a>
                  <a className="text-white text-sm">(37) 98803-5560</a>
                </div>
              </div>
            </div>
          </div>

          <div id="MainContent" className='ml-16 mb-16 mt-8 overflow-hidden flex flex-col '>
            {children}
          </div>
        </div>
      </div>
      : 
      <div className="flex flex-col h-full bg-no-repeat bg-contain z-1 relative">
        <HeaderMobile></HeaderMobile>
        <div id="MainContent" className='ml-4 mr-4 mt-2 flex flex-col '>
            {children}
        </div>
      </div>
      }
 
    </>
  )
}