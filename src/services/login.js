const login = async ({ email, password }) => {
  const data = { email, password }

  const requestOptions = {
    method: 'POST',
    'mode': 'cors',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }
  
  try{
    console.log(`${process.env.REACT_APP_API_URL}/login`)
  const res = await fetch(`https://www.delilahresto.gq/api/login`, requestOptions)
  const userData = await res.json();
  console.log(userData)
  return userData

  } catch (err) {
   return err
  }
}

export default login 