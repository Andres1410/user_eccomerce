import React, { useState } from 'react';
import Cards from 'react-credit-cards-2';
import 'react-credit-cards-2/dist/es/styles-compiled.css';
import { Link } from 'react-router-dom';

// Tarjeta de credito o debito
const PaymentForms = () => {
  const [paymentInfo, setPaymentInfo] = useState({
    number: '',
    name: '',
    expiry: '',
    cvc: '',
    focus: '',
  });

  // Analizar:
  const [billingInfo, setBillingInfo] = useState({
    name: paymentInfo.name, // Usa el nombre de la tarjeta (u otro nombre relevante)
    description: "Arriendo mensual",
    single_use: false,
    collect_shipping: false,
  });
  

// chekear el tipon de tarjeta 
  const handleInputChange = (e) => {
    setPaymentInfo({
      ...paymentInfo,
      [e.target.name]: e.target.value,
    });
  };

//   handleFocus
  const handleFocusChange = (e) => {
    setPaymentInfo({
      ...paymentInfo,
      focus: e.target.name,
    });
  };

//   Analizar los inputs

  const processPayment = () => {
    console.log('number => ', paymentInfo.number);
    console.log('name => ', paymentInfo.name);
    console.log('expiry => ', paymentInfo.expiry);
    console.log('cvc => ', paymentInfo.cvc);
    console.log('billingInfo => ', billingInfo);
  };
  
//   const wompi = useWompi()

//   const {error, paymentMethod } = await wompi.createPaymentMethod({
//     type: 'card',
//     card: ElementInternals.getElements(cardElement)
//   })
  
const generateRandomName = () => {
  const names = ['Name1', 'Name2', 'Name3']; // Replace with your actual names
  const randomIndex = Math.floor(Math.random() * names.length);
  return names[randomIndex];
};

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="card bg-white rounded-md shadow-md p-4">
        <div className="card-body">
          <Cards
            number={paymentInfo.number}
            name={paymentInfo.name}
            expiry={paymentInfo.expiry}
            cvc={paymentInfo.cvc}
            focused={paymentInfo.focus}
          />
          </div>
          <br />
          {/* onSubmit={handleSubmit} */}
          {/* action='https://checkout.wompi.co/p/'   method='get'*/}
          <form action='https://checkout.wompi.co/p/' method='get'>  
            {/* <CardElement/> */}
            <div className="form-group">
              <label htmlFor="number">Numero de la tarjeta</label>
              <br />
              <input
                type="text"
                name="number"
                id="number"
                maxLength={16}
                className="form-control"
                onChange={handleInputChange}
                onFocus={handleFocusChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="name">Nombre</label>
              <br />
              <input
                type="text"
                name="name"
                id="name"
                maxLength="30"
                className="form-control"
                onChange={handleInputChange}
                onFocus={handleFocusChange}
              />
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="expiry">Fecha de expiracion</label>
                <br />
                <input
                  type="text"
                  name="expiry"
                  id="expiry"
                  maxLength="4"
                  className="form-control"
                  onChange={handleInputChange}
                  onFocus={handleFocusChange}
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="cvc">CVC</label>
                <br />
                <input
                  type="text"
                  name="cvc"
                  id="cvc"
                  maxLength="4"
                  className="form-control"
                  onChange={handleInputChange}
                  onFocus={handleFocusChange}
                />
               
              </div> 
              <br />
            </div>
            <Link
                to='/Payment-forms'>
                <button
                className="btn btn-success btn-block btn-lg bg-green-500 text-white rounded-md"
                onClick={processPayment}
                type="submit"
                >
                Pagar
                </button>
            </Link>
          </form>
      </div>
    </div>
  );
};

export default PaymentForms;

