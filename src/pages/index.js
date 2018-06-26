import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Title from '../components/title'
import AnchorLink from '../components/AnchorLink'
import logo from '../images/logo.png'
import logoCookoon from '../images/logo-cookoon.png'
import competitif from '../images/ico-competitif.svg'
import efficace from '../images/ico-efficace.svg'
import fiable from '../images/ico-fiable.svg'
import simple from '../images/ico-simple.svg'
import backgroundJanitor from '../images/background-janitor.png'
import backgroundBuilding from '../images/background-building.png'

const IndexPage = props => (
  <div>
    <div
      className="presentation background-hidden-xs"
      style={{ backgroundImage: `url(${backgroundJanitor})` }}
    >
      <div
        className="presentation-background background-hidden-md"
        style={{ backgroundImage: `url(${backgroundBuilding})` }}
      >
        <div className="container">
          <nav>
            <div className="row">
              <div className="col-3 col-sm-6 col-lg-3">
                <div className="d-flex justify-content-between align-items-end logo-block">
                  <img src={logo} alt="" id="logo" />
                  <p className="d-none d-sm-block">
                    <span className="logo-text">Le Portier</span>
                    <br />
                    <span className="small">par Cookoon</span>
                  </p>
                </div>
              </div>
              <div className="col-9 col-sm-6 offset-lg-1 col-lg-4">
                <div className="nav-text text-center">
                  <AnchorLink href="#engagement" history={props.history}>
                    Service
                  </AnchorLink>
                  <AnchorLink href="#explanation" history={props.history}>
                    Offre
                  </AnchorLink>
                  <AnchorLink href="#pricing" history={props.history}>
                    Tarifs
                  </AnchorLink>
                </div>
              </div>
            </div>
          </nav>
        </div>
        <div className="container text-center presentation-content-height">
          <div className="row presentation-content-height">
            <div className="offset-md-2 col-md-8 offset-lg-3 col-lg-6 presentation-content-height">
              <div className="d-flex flex-column justify-content-between presentation-content-height">
                <h1>
                  Votre clef d'appartement<br />oubliée à l'intérieur ?
                  <br />
                  <br />
                  Des invités arrivés en avance ?
                </h1>
                <div className="nav-button">
                  <a href="https://cookoon.typeform.com/to/yDXnaq">
                    <button className="btn btn-custom">S'inscrire</button>
                  </a>
                </div>
                <h3>
                  Le portier vous livre un double de vos clefs, en deux heures,
                  24H/24 7J/7
                </h3>
                <div className="d-none d-sm-block" />
                <div className="d-none d-sm-block" />
                <div />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="engagement" id="engagement">
      <Title text="La promesse du portier" />
      <div className="container py-4">
        <div className="row">
          <div className="col-md pb-4 px-4">
            <div className="d-flex">
              <img src={simple} alt="simple" className="bullets" />
              <div className="content pl-3">
                <h3>SIMPLE</h3>
                <p>
                  Un numéro de téléphone et un code pour déclencher la livraison
                  à votre adresse.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md pb-4 px-4">
            <div className="d-flex">
              <img src={efficace} alt="efficace" className="bullets" />
              <div className="content pl-3">
                <h3>EFFICACE</h3>
                <p>
                  Notre portier vous livre vos clefs sous deux heures 7J / 7,
                  24H sur 24.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md pb-4 px-4">
            <div className="d-flex">
              <img src={competitif} alt="competitif" className="bullets" />
              <div className="content pl-3">
                <h3>COMPÉTITIF</h3>
                <p>
                  Un abonnement mensuel accessible pour la conservation de vos
                  clefs et des tarifs de livraison adaptés aux horaires.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md pb-4 px-4">
            <div className="d-flex">
              <img src={fiable} alt="fiable" className="bullets" />
              <div className="content pl-3">
                <h3>SÉCURISÉ</h3>
                <p>
                  Vos clefs sont dans un coffre sans lien avec votre adresse.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="explanation" id="explanation">
      <Title text="Le fonctionnement" color="white" />

      <div className="container">
        <div className="row text-center">
          <div className="col-md">
            <h3>1.</h3>
            <p>
              Vous remettez vos clefs et un code au portier lors d'un
              rendez-vous ou vous expédiez clefs et code en recommandé à
              l'adresse qui vous sera communiquée.
            </p>
          </div>
          <div className="col-md">
            <h3>2.</h3>
            <p>
              Vos clefs sont stockées dans un coffre fort, surveillé 24h/24 et
              uniquement accessible par nos équipes.
            </p>
          </div>
          <div className="col-md">
            <h3>3.</h3>
            <p>
              Lorsque vous en avez besoin, vous appelez un numéro et confiez
              votre code, vous fixez une heure de livraison ou demandez qu'elles
              vous soient livrées au plus vite.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="pricing" id="pricing">
      <Title text="Les tarifs" />
      <div className="container">
        <div className="bubbles row">
          <div className="col-md d-flex justify-content-around">
            <div className="bubble-container">
              <div className="bubble-black text-center">
                <div>
                  <span className="font-weight-bold">3 €</span>
                  <br />/ mois
                </div>
              </div>
              <div className="bubble-yellow left text-center">
                <div>
                  <span className="font-weight-bold">25 €</span>
                  <br />/ an
                </div>
              </div>
              <div className="bubble-text-left">
                <p className="text-center">
                  Conservation<br />de vos clés
                </p>
              </div>
            </div>
          </div>
          <div className="col-md d-flex justify-content-around">
            <div className="bubble-container">
              <div className="bubble-black text-center">
                <div>
                  <span className="font-weight-bold">30 €</span>
                  <br />8h-20h
                </div>
              </div>
              <div className="bubble-yellow right text-center">
                <div>
                  <span className="font-weight-bold">45 €</span>
                  <br />20h-8h
                </div>
              </div>
              <div className="bubble-text-right">
                <p className="text-center">
                  Livraison à domicile<br /> de vos clés
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="cta text-center">
      <a href="https://cookoon.typeform.com/to/yDXnaq">
        <button className="btn btn-custom">S'inscrire</button>
      </a>
    </div>
    <footer className="py-4 px-2">
      <div className="container">
        <div className="row">
          <div className="col-md">
            <p>Réceptions Nouvelles 2018 - Tous droits réservés</p>
          </div>
          <div className="col-md">
            <div className="d-flex justify-content-between footer-links">
              <p>Contact</p>
              <p>Conditions Générales</p>
              <div className="d-flex align-items-start">
                <p>
                  by <span>Cookoon</span>
                </p>
                <img src={logoCookoon} alt="Logo Cookoon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
)

export default IndexPage
