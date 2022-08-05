import Logo from './logo'
import Menu from './menu'
import Reserva from './reserva'

// import { Container } from './styles';

export default function Sidebar() {
  return(
    <aside className='flex grow-0 shrink-0 md:basis-[250px] lg:basis-[300px] flex-col mt-1'>
      <div className='bg-primary mb-1 rounded p-2 '>
        <Logo></Logo>
      </div>       

      <div className='bg-primary mb-1 p-2 rounded '>
        <Menu></Menu>
      </div>

      <div className='bg-primary md-1 p-2 rounded flex-grow mb-1 overflow-auto'>
        <h3 className='bg-secondary text-white text-center p-2 rounded text-lg'>Reserve Agora!</h3>
        <Reserva></Reserva>
        <hr className='border-white'></hr>
        <p className='text-center text-white'>&quot;Reserve também por telefone&quot;</p>
      </div>

    </aside>
  )
}
