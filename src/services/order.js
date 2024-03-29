const createOrder = async (token, order, shippingAddress, methodOfPayment) => {
  const data = { 
    'order': order,
    'methodOfPayment': methodOfPayment,
    'shippingAddress': shippingAddress 
  }

  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token,
    },
    body: JSON.stringify(data)
  }

  try {
  const res = await fetch(`${process.env.REACT_APP_API_URL}/orders`, requestOptions)

  const data = await res.json();
  return data

  } catch (err) {
   return err
  }
}

const getHistory = async (token) => {
  const requestOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token,
    },
  }

  try {
  const res = await fetch(`${process.env.REACT_APP_API_URL}/orders/history`, requestOptions)
  const data = await res.json();
  return data

  } catch (err) {
   return err
  }
}

const confirmOrder = async (token) => {
  const requestOptions = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token,
    },
  }

  try {
  const res = await fetch(`${process.env.REACT_APP_API_URL}/orders/confirmation`, requestOptions)

  const data = await res.json();
  return data

  } catch (err) {
   return err
  }
}

const cancellationOrder = async (token) => {
  const requestOptions = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token,
    },
  }

  try {
  const res = await fetch(`${process.env.REACT_APP_API_URL}/orders/cancellation`, requestOptions)

  const data = await res.json();
  return data

  } catch (err) {
   return err
  }
}

export { createOrder, getHistory, confirmOrder, cancellationOrder }