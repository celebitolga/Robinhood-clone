import axios from "axios";

const TOKEN = "c19t14f48v6tl8v9pkog";
const BASE_URL = "https://finnhub.io/api/v1/quote";

export const getStockDataFromAPI = async (stock) => {
  let data = await axios
    .get(`${BASE_URL}?symbol=${stock}&token=${TOKEN}`)
    .then((res) => ({ name: stock, data: res.data }))
    .catch((error) => {
      throw error;
    });
  
  return data;
};
