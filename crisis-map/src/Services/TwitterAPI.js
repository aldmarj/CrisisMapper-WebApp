import axios from 'axios'

export function fetchTweets(){
    return axios.get('http://localhost:3000/tweets') 
  }