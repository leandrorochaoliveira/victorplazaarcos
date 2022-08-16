import Head from 'next/head'
import Image from 'next/image'
import MainPage from '../components/mainPage'

export default function Home() {
  return (
    <>
      <Head>
        <title>Hotel Victor Plaza Arcos</title>
      </Head>
      <MainPage title="Bem-vindo ao Victor Plaza Arcos">
        <p>A boa localização aliada ao conforto dos apartamentos torna o hotel Victor Plaza Arcos uma excelente opção para quem procura por um hotel do tipo express.</p>
        <p>Oferecendo os serviços essenciais de qualidade, como um bom café da manhã, room service e restaurante, o hotel proporciona ao cliente momentos especiais a um custo adequado.</p>
      </MainPage>
    </>
  )
}
