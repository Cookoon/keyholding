import React from 'react'
import Link from 'gatsby-link'
import Title from '../components/title'

const IndexPage = () => (
  <div>
    <div className="section presentation full text-center">
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
      <div className="container py-4">
        <div className="row">
          <div className="col-md pb-4 px-4">
            <div className="d-flex">
              <p>Logo</p>
              <div className="content">
                <h3>SIMPLE</h3>
                <p>
                  Confiez les clés au portier, nous les conservons dans un
                  endroit sécurisé à Paris.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md pb-4 px-4">
            <div className="d-flex">
              <p>Logo</p>
              <div className="content">
                <h3>EFFICACE</h3>
                <p>
                  Notre portier vous amène, sur demande, vos clés chez vous tous
                  les jours, de 7h à 21h.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md pb-4 px-4">
            <div className="d-flex">
              <p>Logo</p>
              <div className="content">
                <h3>COMPÉTITIF</h3>
                <p>
                  Nous gardons vos clés gratuitement, vous ne payez que pour
                  leur livraison.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md pb-4 px-4">
            <div className="d-flex">
              <p>Logo</p>
              <div className="content">
                <h3>FIABLE</h3>
                <p>
                  Nous vous offrons une palette de services complémentaires dans
                  votre abonnement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="section explanation">
      <Title text="Comment ça marche ?" color="white"/>
    </div>
  </div>
)

export default IndexPage
