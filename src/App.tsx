import { useState, useEffect } from 'react'

import './App.css'

const MostrarMensajes = () => { 

  const [mensaje, establecerMensaje] = useState('')

  useEffect(() => {

    const finalizado = setTimeout(() => {

      establecerMensaje("Eres un crack de la programación !")

    }, 3000);

    return () => clearTimeout(finalizado)

  }, [])

  return (
    <p>{mensaje}</p>
  )

}

function App() {  

  return (
    <>
      <div className='mensaje'>
        <MostrarMensajes/>
       </div>
    </>
  )
}

export default App
