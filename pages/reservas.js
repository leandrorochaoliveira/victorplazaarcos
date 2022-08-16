import Head from 'next/head'
import MainPage from '../components/mainPage'

export default function Sobre() {
  return(
    <>
      <Head>
        <title>Reservas e Tarifas - Victor Plaza Hotel Arcos</title>
      </Head>
      <MainPage title="Reservas e Tarifas">
        <p>As reservas deverão ser confirmadas 24 horas após a solicitação, mediante pagamento da diária, realizado através de depósito bancário, cartões Visa e Mastercard, American.</p>
        <p>Check-In 14:00 - Check-Out - 11:00;<br></br>
        O café da manhã e o estacionamento está incluso na diária.</p>
      </MainPage>
    </>
  )
}

