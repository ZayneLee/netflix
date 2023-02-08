import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "044a8f3afc9c9ffff4076cd6664079d4",
    language: "ko-KR",
  },
});

export default instance;
