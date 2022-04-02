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
    const res = await fetch('http://localhost:3000/api/user/me', requestOptions)
    const userData = await res.json();
    return userData
  } catch (err) {
    return err
  }
}

export default getUser 