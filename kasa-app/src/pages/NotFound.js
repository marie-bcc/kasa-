import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div>
      <div className="notFoundContainer">

        <h1 className='notFoundTitle'> 404 </h1>
        <p className='notFoundDescription'>Oups! La page que vous demandez n'existe pas. 🤖 </p>

        <Link to="/" className='notFoundLink'>
          Retourner sur la page d'accueil
        </Link>
      </div>
    </div>


  )
}
