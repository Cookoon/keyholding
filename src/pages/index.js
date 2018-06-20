import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import Title from '../components/title';
import logo from '../images/logo.png';
import competitif from '../images/ico-competitif.svg';
import efficace from '../images/ico-efficace.svg';
import fiable from '../images/ico-fiable.svg';
import simple from '../images/ico-simple.svg';

const IndexPage = () => (
  <div>
    <div className="presentation text-center">
      <nav>
        <img src={logo} alt="" id='logo'/>
        <div className="nav-text pt-3">
          <Link to="#engagement">
            Promesse
          </Link>
          <Link to="#explanation">
            Offres
          </Link>
          <Link to="#pricing">
            Tarifs
          </Link>
        </div>
      </nav>

      <h1 className="py-4">
        Ne vous retrouvez plus jamais <br className='d-none d-md-inline'/>
        coincés devant la porte.
      </h1>
      <div className="nav-button">
        <a href='https://cookoon.typeform.com/to/yDXnaq'>
          <button className="btn btn-custom">
            S'inscrire
          </button>
        </a>
      </div>
      <h2 className="pt-4">
        Un numéro unique pour déposer et récupérer vos clés <br className='d-none d-md-inline'/>
        si vous vous êtes enfermé(e) dehors
      </h2>
    </div>
    <div className="engagement" id='engagement'>
      <Title text="La promesse du portier" />
      <div className="container py-4">
        <div className="row">
          <div className="col-md pb-4 px-4">
            <div className="d-flex">
              <img src={simple} alt="simple" className='bullets'/>
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
              <img src={efficace} alt="efficace" className='bullets'/>
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
              <img src={competitif} alt="competitif" className='bullets'/>
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
              <img src={fiable} alt="fiable" className='bullets'/>
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
    <div className="explanation" id='explanation'>
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
    <div className="pricing" id='pricing'>
      <Title text="Les tarifs" />
      <div className="container">
        <div className="bubbles row">
          <div className="col-md d-flex justify-content-around">
            <div className="bubble-container">
              <div className="bubble-black text-center">
                <div>
                  <span className='font-weight-bold'>2,90€</span>
                  <br />/ mois
                </div>
              </div>
              <div className="bubble-yellow left text-center"></div>
            </div>
          </div>
          <div className="col-md d-flex justify-content-around">
            <div className="bubble-container">
              <div className="bubble-black text-center">
                <div>
                  <span className='font-weight-bold'>30 €</span>
                  <br />8h-20h
                </div>
              </div>
              <div className="bubble-yellow right text-center">
                <div>
                  <span className='font-weight-bold'>45 €</span>
                  <br />8h-20h
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


    <div className="cta text-center">
      <a href='https://cookoon.typeform.com/to/yDXnaq'>
        <button className="btn btn-custom">
          S'inscrire
        </button>
      </a>
    </div>
    <footer className="py-4 px-2">
      <div className="container">
        <div className="row">
          <div className="col-md">
            <p>Récéption nouvelles 2018 - Tous droits réservés</p>
          </div>
          <div className="col-md">
            <div className="d-flex justify-content-between footer-links">
              <p>Contact</p>
              <p>Conditions Générales</p>
              <p>by <span>Cookoon</span></p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
)

export default IndexPage
