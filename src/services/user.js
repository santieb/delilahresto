const getUser = async (token) => {
  const requestOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token,
      'Accept': '*/*'
    }
  }
  
  try{
    console.log(token)
    const res = await fetch(`${process.env.REACT_APP_API_URL}/user/me`, requestOptions)
    const userData = await res.json()
    return userData
  } catch (err) {
    return err
  }
}

export default getUser 