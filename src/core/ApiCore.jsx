import { API_URL } from "../config";
import queryString from "query-string";

// export const getProducts = (sortBy, order, limit) => {
//   return fetch(
//     `${API_URL}/product?sortBy=${sortBy}&order=${order}&limit=${limit}`
//   )
//     .then((res) => res.json())
//     .then((res) => res.products)
//     .catch((err) => console.log(err));
// };

// // one param dynamic with query-string package
export const getProducts = (params) => {
  let query = queryString.stringify(params)

  return fetch(
    `${API_URL}/product?${query}`
  )
    .then((res) => res.json())
    .then((res) => res.products)
    .catch((err) => console.log(err));
};

export const getcategories = () => {
  return fetch(`${API_URL}/category`, {
    method: "GET",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((res) => res.categories)
    .catch((err) => console.log(err));
};

export const filterProducts = (skip , limit , filters) => {

  const data = {
    skip , 
    limit,
    filters
  }
  
  return fetch(`${API_URL}/product/search`, {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
    },
    body : JSON.stringify(data)
  })
    .then((res) => res.json())
    .then((res) => res.products)
    .catch((err) => console.log(err));
};
