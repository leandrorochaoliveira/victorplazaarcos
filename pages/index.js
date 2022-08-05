import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div className=''>
      <Head>
        <title>Hotel Victor Plaza Arcos</title>
        <meta name="description" content="Localizado no município de Arcos-MG, o Victor Plaza Hotel possui infra-estrutura moderna com amplas suítes, Internet Wireless, Tv a cabo, ar condicionado. É um hotel aconchegante, onde você encontra conforto, qualidade e praticidade." />
      </Head>

      <main className='bg-primary text-white'>
        <h1 className='text-2xl bg-secondary p-2'>
          Bem-vindo ao Victor Plaza Arcos
        </h1>

        <div className='p-2'>
        	<p className='pb-2'>A boa localização aliada ao conforto dos apartamentos torna o hotel Victor Plaza Arcos uma excelente opção para quem procura por um hotel do tipo express.</p>
          <p className='pb-2'>Oferecendo os serviços essenciais de qualidade, como um bom café da manhã, room service e restaurante, o hotel proporciona ao cliente momentos especiais a um custo adequado.</p>
        </div>


    
      </main>

     
    </div>
  )
}
