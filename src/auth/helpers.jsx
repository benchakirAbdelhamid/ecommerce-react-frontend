export const isAuthenticated = () => {
    const jwt = localStorage.getItem("jwt_info");
    if (jwt) {
      // console.log('======>',JSON.parse(jwt))
      return JSON.parse(jwt);
      // return true;
    }else{
      return false;
    }
  };