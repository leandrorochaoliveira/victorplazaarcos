import Link from 'next/link'
import Head from 'next/head'
import MainPage from '../components/mainPage'

export default function FourOhFour() {
  return(
    <>
      <Head>
        <title>Victor Plaza Hotel Arcos</title>
      </Head>
      <MainPage title="Pagina não encontrada">
        <p>
          <Link href="/">
            <a>
              Voltar ao inicio
            </a>
          </Link>
        </p>
      </MainPage>
    </>
  )
}

