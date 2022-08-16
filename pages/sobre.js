import Head from 'next/head'
import MainPage from '../components/mainPage'

export default function Sobre() {
  return(
    <>
      <Head>
        <title>Sobre - Victor Plaza Hotel Arcos</title>
      </Head>
      <MainPage title="Sobre o Hotel">
        <p>“O Victor Plaza Hotel Arcos é o mais novo e luxuoso hotel da cidade de Arcos – Minas Gerais. Possui uma infra-estrutura moderna e completa. Além dos serviços e atendimento de qualidade. Sendo assim, convidamos-lhe a nos fazer uma visita e conhecer nossas instalações. Será um prazer recebê-los.”.</p>
        <p>Informamos também, que trabalhamos com faturamento para empresas (<a href="/images/pdf/Regulamento.pdf" target="_blank">consulte regulamento</a>). Caso a agência ou a empresa já tiver cadastro no Victor Plaza Hotel em Formiga-MG não há necessidade de efetuar um novo cadastro.</p>	
      </MainPage>
  
    </>
  )
}

