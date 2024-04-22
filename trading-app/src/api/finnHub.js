import axios from 'axios'; // Remove 'axios' from curly braces
const TOKEN="coj2hg9r01qspu2leun0coj2hg9r01qspu2leung"
export default axios.create({
  baseURL: "https://finnhub.io/api/v1",
  params:{
    token:TOKEN
  }
});
