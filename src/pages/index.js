import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (

  <div className="presentation text-center">
    <nav>
      <i className="fas fa-key"></i>
      <div className="nav-text">
        <p>Promesse</p>
        <p>Offres</p>
        <p>Tarifs</p>
      </div>
    </nav>

    <h1 className="p-4">
      Ne vous retrouvez plus jamais <br/>
      coincés devant la porte.
    </h1>
    <div className="nav-button p-3">
      <button className="btn btn-lg btn-gray px-4">
        Sonnez le portier
      </button>
    </div>
    <h2 className="pt-2">
      Un numéro unique pour déposer et récupérer vos clés <br/>
      si vous vous êtes enfermé(e) dehors
    </h2>
  </div>
)

export default IndexPage
