import Link from 'next/link'
export default function MenuItem({href, title}) {
  return(
      <li>
        <Link href={href}>
          <a className='text-white uppercase transition hover:text-secondary'>{title}</a>
        </Link>
      </li>
  )
}