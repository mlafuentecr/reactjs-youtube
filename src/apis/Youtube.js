import axios from 'axios'

const youtubeKey = 'AIzaSyDDov613wiHyScrMe6rko5AUIdOYwPdzwo'
const youtubeBaseURL = 'https://youtube.googleapis.com/youtube/v3' ///search/list
//https://youtube.googleapis.com/youtube/v3/search?q=cat&key=[YOUR_API_KEY]

export default axios.create({
  baseURL: youtubeBaseURL,
  params:{
    part: 'snippet',
    maxResults: 5, 
    key: youtubeKey
  }
})