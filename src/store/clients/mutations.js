import axios from 'axios'

const host = 'http://127.0.0.1:5000/'

const urlGetActiveClients = host + 'getactiveclients/'

export const getActiveClients = (state) => {
  axios({
    url: urlGetActiveClients,
    method: 'GET'
  })
    .then(resp => {
      let response = resp.data
      state.active_clients = response
    })
    .catch(err => {
      console.log(err)
    })
}
