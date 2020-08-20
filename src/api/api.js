import axios from "axios";

class API {
  constructor() {
    this.api = axios.create({
      baseURL: process.env.REACT_APP_API_URL,
    });
  }

  callApi = async (request) => {
    try {
      const res = await request();
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  getAllCountries = async () => {
    return await this.callApi(() => this.api.get("all"));
  };

  getCountry = async (alphaCode) => {
    return await this.callApi(() => this.api.get(`alpha/${alphaCode}`));
  };
}

const api = new API();

export default api;
