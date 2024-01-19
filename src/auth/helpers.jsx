export const isAuthenticated = () => {
  const jwt = localStorage.getItem("jwt_info");
  if (jwt) {
    // console.log('======>',JSON.parse(jwt))
    return JSON.parse(jwt);
    // return true;
  } else {
    return false;
  }
};

export const emptyCart = () => {
  localStorage.removeItem("cart");
};


export const Current_Date = ()=>{
  const now = new Date();
const year = now.getFullYear();
const monthName = now.toLocaleString('en-US', { month: 'long' });
const day = now.getDate();
const hours = now.getHours(); 
const minutes = now.getMinutes();
return {
  year,monthName,day,hours,minutes
}
}