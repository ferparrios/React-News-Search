import React, { useState, useEffect } from 'react';
import Formulario from './components/Formulario';
import Header from './components/Header';
import Listado from './components/Listado';

function App() {

  // definir la categoria y noticias
  const [ categoria, setCategoria ] = useState('')
  const [noticias, setNoticias] = useState([])

  useEffect(() => {
    const consultarApi = async () =>{
      const url = `http://newsapi.org/v2/top-headlines?country=us&category=${categoria}&apiKey=0f40800114ef4e99a5f88cf33d58ae1d`

      const respuesta = await fetch(url)
      const noticias = await respuesta.json()

      setNoticias(noticias.articles)

      // console.log(noticias.articles);
    }
    consultarApi()
  }, [categoria])

  return (
    <>
      <Header titulo="Buscador de Noticias"/>
      <div className="container white">
        <Formulario setCategoria={setCategoria} />

        <Listado noticias={noticias} />
      </div>
    </>
  );
}

export default App;
