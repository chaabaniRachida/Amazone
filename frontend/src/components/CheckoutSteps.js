import React from 'react';

export default function CheckoutSteps(props) {
  return (
    <div className="row checkout-steps">
      <div className={props.step1 ? 'active' : ''}>Connexion</div>
      <div className={props.step2 ? 'active' : ''}>Livraison</div>
      <div className={props.step3 ? 'active' : ''}>Paiment</div>
      <div className={props.step4 ? 'active' : ''}>Passer La commande</div>
    </div>
  );
}