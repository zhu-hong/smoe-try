const axios = require('axios')
const fs = require('fs')

axios.post('https://element-api.ele.me/element/theme/updateVariable?version=2.15.7', {
  global: {
    '$--color-primary': '#F403D0',
  },
}, {
  responseType: 'blob',
}).then(({ data }) => {
  fs.writeFileSync('index.css', data, {
    encoding: 'utf8'
  })
})