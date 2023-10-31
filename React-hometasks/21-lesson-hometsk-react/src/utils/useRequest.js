import axios from "axios";

export const useRequest = axios.create({
  baseURL: "https://api.apilayer.com/currency_data/",
});
