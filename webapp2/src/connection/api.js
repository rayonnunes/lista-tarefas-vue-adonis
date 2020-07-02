import axios from "axios";

export default () => {
  const api = axios.create({
    baseURL: "http://127.0.0.1:3333/",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  });
  // api.interceptors.request.use(async config => {
  //   try {
  //     const token = await AsyncStorage.getItem('@token');
  //     config.headers.Authorization = token ? `Token ${token}` : '';
  //     return config;
  //   } catch (e) {
  //     console.log(e);
  //   }
  // });
  return api;
};
