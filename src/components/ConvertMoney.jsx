import React from 'react'

 const ConvertMoney = (props) => {
    // https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/NumberFormat
    let formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    });
    return formatter.format(props.budget);
  }

  export default ConvertMoney;