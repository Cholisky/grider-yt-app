import axios from 'axios';

const YOU_TUBE_KEY = 'AIzaSyC0-jqFilOlz5oGF6XSY-P9eWLKfB58KNk';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: YOU_TUBE_KEY,
  },
});
