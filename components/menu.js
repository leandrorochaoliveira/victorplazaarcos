import Link from 'next/link'

export default function Menu () {
  return (
    <ul className='pl-2 font-serif'>
      <li >
        <Link href="/sobre">
          <a className='text-white uppercase transition hover:text-secondary'>Sobre o Hotel</a>
        </Link>
      </li>
      <li>
        <Link href="/acomodacoes">
          <a className='text-white uppercase transition hover:text-secondary'>Acomodações</a>
        </Link>
      </li>
      <li>
        <Link href="/tarifas">
          <a className='text-white uppercase transition hover:text-secondary'>Tarifas e Reservas</a>
        </Link>
      </li>
      <li>
        <Link href="/contato">
          <a className='text-white uppercase transition hover:text-secondary'>Contato</a>
        </Link>
      </li>
      <li>
        <Link href="/localizacao">
          <a className='text-white uppercase transition hover:text-secondary'>Localização</a>
        </Link>
      </li>
    </ul>
  )
}