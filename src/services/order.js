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
  const res = await fetch('http://localhost:3000/api/orders', requestOptions)

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
  const res = await fetch('http://localhost:3000/api/orders/history', requestOptions)
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
  const res = await fetch('http://localhost:3000/api/orders/confirmation', requestOptions)

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
  const res = await fetch('http://localhost:3000/api/orders/cancellation', requestOptions)

  const data = await res.json();
  return data

  } catch (err) {
   return err
  }
}

export { createOrder, getHistory, confirmOrder, cancellationOrder }