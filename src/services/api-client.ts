import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "0efde95881d14c01b29a53b6cb94cff0",
  },
});