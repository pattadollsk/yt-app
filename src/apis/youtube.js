import axios from "axios";

const KEY = "AIzaSyD441C4C488FNCtMX1SxyeU-j8tEQIuEU4";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    chart: "mostPopular",
    maxResults: 5,
    type: "video",
    key: KEY,
  },
});
