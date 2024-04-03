export const clientId = "51556282843-fopgvec8n955nkvomoug2n3o8lrhkhpn.apps.googleusercontent.com";

export const onSuccess = (res) => {
  console.log("LOGIN SUCESS!! Current User:", res.profileObj);
  window.location.href = '/Home';
}

export const onFailure = (res) => {
  console.log("Login Failed:",  res)
}