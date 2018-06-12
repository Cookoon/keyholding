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

      <div className="container">
        <div className="row text-center">
          <div className="col-md">
            <h3>1.</h3>
            <p>
              Vous remettez vos clés au portier, le jour et à l'heure qui  vous
              arrange.
            </p>
          </div>
          <div className="col-md">
            <h3>2.</h3>
            <p>
              Nous mettons vos clés à l'abri dans notre entrepôt à Paris
            </p>
          </div>
          <div className="col-md">
            <h3>3.</h3>
            <p>
              Vous pouvez commander la livraison de vos clés à tout moment pour
              35€.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="section pricing">
      <Title text="Les tarifs" />
      <div className="container">
        <div className="bubbles row">
          <div className="col-md">
            <div className="bubble-container">
              <div className="bubble-black">30 euros</div>
            </div>
          </div>
          <div className="col-md">
            <div className="bubble-container">
              <div className="bubble-black">30 euros</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="section cta text-center">
      <button className="btn btn-lg px-4">
        S'inscrire
      </button>
    </div>
    <footer className="section d-flex justify-content-around">
      <p>Récéption nouvelles 2018 - Tous droits réservés</p>
      <div className="d-flex justify-content-around w-25">
        <p>Contact</p>
        <p>Conditions Générales</p>
        <p>by <span>Cookoon</span></p>
      </div>
    </footer>
  </div>
)

export default IndexPage
