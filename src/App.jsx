import { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import Frase from './components/Frase'

const Contenedor = styled.article`
  display: flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction: column;
`
const Boton = styled.button`
  background: -webkit-linear-gradient(top left, #007d35 0%, #007d35 40%, #0f574e 100%);
  background:size: 300px;
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
  margin-top: 3rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;
  transition: background-size .8s ease;

  :hover {
    cursor: pointer;
    backgroud-size: 400px;
  }
`
function App () {
  const [frase, guardarFrase] = useState({})
  const consultarApi = () => {
    fetch('https://api.breakingbadquotes.xyz/v1/quotes')
      .then((response) => response.json())
      .then((frase) => {
        guardarFrase(frase[0])
      })
  }

  useEffect(() => {
    consultarApi()
  }, [])
  return (
    <main className='App'>
      <Contenedor>
        <Frase
          frase={frase}
        />
        <Boton
          onClick={consultarApi}
        >
          Get phrase
        </Boton>
      </Contenedor>
    </main>
  )
}

export default App
