import MenuItem from './menuItem'

export default function Menu () {
  return (
    <ul className='pl-2 font-serif'>
      <MenuItem href="/sobre" title="Sobre o Hotel"></MenuItem>
      <MenuItem href="/acomodacoes" title="Acomodações"></MenuItem>
      <MenuItem href="/reservas" title="Tarifas e Reservas"></MenuItem>
      <MenuItem href="/localizacao" title="Localização"></MenuItem>
      <MenuItem href="/contato" title="Contato"></MenuItem>
    </ul>
  )
}