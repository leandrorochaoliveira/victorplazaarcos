export default function MainPage(props) {
  return(
    <main className='bg-primary text-white flex flex-col overflow-hidden'>
        <h1 className='text-2xl bg-secondary p-2'>
          {props.title}
        </h1>

        <div className='p-2 grow overflow-y-auto'>
          {props.children}
        </div>
      </main>
  )
}