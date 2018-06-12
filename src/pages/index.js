import React from 'react'
import Link from 'gatsby-link'
import Title from '../components/title'

const IndexPage = () => (
  <div>
    <div className="section presentation text-center">
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
    <div className="section engagement">
      <Title text="La promesse du portier" />
      <div className="container">
        <div className="row">
          <div className="col-md">
            1
          </div>
          <div className="col-md">
            2
          </div>
        </div>
        <div className="row">
          <div className="col-md">
            3
          </div>
          <div className="col-md">
            4
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default IndexPage
