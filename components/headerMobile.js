import Logo from './logo'
import MenuMobile from './menu/menuMobile'
import Reserva from './reserva'

export const HeaderMobile = () => {
  return (
    <div className="flex bg-primary h-20 items-center justify-between pl-2 pr-2">
      <MenuMobile></MenuMobile>
      <Logo></Logo>
      <div className="w-10">

      </div>
    </div>
  )
}