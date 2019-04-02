import config from '../config/secrets.js'
import axios from 'axios'

const data = {
  getPosts(){
    return fetch(`${config.blend.api}/wp-json/wp/v2/posts`)
      .then(res => res.json())
  },
  getPages() {
    return fetch(`${config.blend.api}/wp-json/wp/v2/pages`)
      .then(res => res.json())
  },
  getServerPosts() {
    return axios.get(`${config.blend.api}/wp-json/wp/v2/posts`)
  },
  getServerPages() {
    return axios.get(`${config.blend.api}/wp-json/wp/v2/pages`)
  }
}

export default data
