const updateUser = async (token, data) => {
  const requestOptions = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token,
      'Accept': '*/*'
    },
    body: JSON.stringify(data)
  }

  try{
    const res = await fetch(`${process.env.REACT_APP_API_URL}/user/me`, requestOptions)
    const userData = await res.json();
    return userData
  } catch (err) {
    return err
  }
}
export default updateUser