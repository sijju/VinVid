import axios from 'axios'
const BASE_URL = 'https://youtube-v31.p.rapidapi.com'
const options = {
    
    url: BASE_URL,
    params: {maxResults:'50'},
    headers: {
      'X-RapidAPI-Key': 'e58fecc33fmsh3955e2c25430f10p1762c2jsn842fa9ab06df',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

  export const fetchData = async(url) =>{
    const {data} = await axios.get(`${BASE_URL}/${url}`,options)
    return data;
  } 