const getProducts = async () => {
  const requestOptions = {
    method: 'GET',
    headers: {
      'mode': 'cors',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Accept': '*/*'
    }
  }

  try{
    const res = await fetch(`${process.env.REACT_APP_API_URL}/products`, requestOptions)
    const products = await res.json()
    return products
  } catch (err) {
    return err
  }
}

export default getProducts 