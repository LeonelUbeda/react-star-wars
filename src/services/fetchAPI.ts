import { API_URL } from "../constants/urls";

const fetchAPI = <T = any>(url: string): Promise<T> => {
  return fetch(`${API_URL}${url}`)
    .then((response) => response.json())
    .then((response) => {
      if (response.detail) {
        throw new Error("Not found");
      }
      return response;
    });
};

export default fetchAPI;
