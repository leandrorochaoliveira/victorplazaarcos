import Head from 'next/head'
import MainPage from '../components/mainPage'

export default function Sobre() {
  return(
    <>
      <Head>
        <title>Localização - Victor Plaza Hotel Arcos</title>
      </Head>
      <MainPage title="Localização">
          <p>“O Victor Plaza Hotel Arcos é o mais novo e luxuoso hotel da cidade de Arcos – Minas Gerais. Possui uma infra-estrutura moderna e completa. Além dos serviços e atendimento de qualidade. Sendo assim, convidamos-lhe a nos fazer uma visita e conhecer nossas instalações. Será um prazer recebê-los.”.</p>
          <p>
            <iframe className="w-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d976.4872827444323!2d-45.54462067011872!3d-20.294049221937506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b488ea99f26559%3A0xa77a6c8057ec8cf3!2sVictor%20Plaza%20Hotel%20Arcos!5e0!3m2!1spt-BR!2sbr!4v1660227799728!5m2!1spt-BR!2sbr" height="450" allowFullScreen="" loading="lazy" ></iframe>  
          </p>	
      </MainPage>
    </>
  )
}

