import React from 'react'
import useSelect from '../hooks/useSelect'
import styles from './Formulario.module.css'
import PropTypes from 'prop-types'


const Formulario = ({setCategoria}) => {

  // Creando opciones
  const OPCIONES = [
    { value: 'general', label: 'General' },
    { value: 'business', label: 'Negocios' },
    { value: 'entertaiment', label: 'Entretenimiento' },
    { value: 'health', label: 'Salud' },
    { value: 'science', label: 'Ciencia' },
    { value: 'sports', label: 'Deportes' },
    { value: 'technology', label: 'Tecnologia' },
  ]

  // Utilizar el custom hook
  const [ categoria, SelectNoticias ] = useSelect('technology', OPCIONES)

  // submit al form, pasar categoria al app.js
  const buscarNoticias = e =>{
    e.preventDefault()

    setCategoria(categoria)
  }

  return (
    <div className={` ${styles.buscador} row`}>
      <div className="col s12 m8 offset-m2">
        <form action="" onSubmit={buscarNoticias}>
          <h2 className={styles.heading}>Encuentra Noticias por categoria</h2>

          <SelectNoticias />

          <div className="input-field col s12">
            <input type="submit" value="Buscar" className={`${styles['btn-block']}  btn-large amber darken-2`} />
          </div>
        </form>
      </div>
    </div>
  )
}

Formulario.propTypes = {
  setCategoria: PropTypes.func.isRequired
}

export default Formulario
