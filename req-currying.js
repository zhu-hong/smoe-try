import axios from 'axios'

const axiosCurrying = (baseURL) => {
  // return (method) => {
  //   return (url, args) => {
  //     return new Promise(async (resolve) => {
  //       let config = {
  //         baseURL,
  //         method,
  //         url,
  //       }
  //       if (method.toUpperCase() === 'POST') {
  //         config['data'] = args
  //       } else {
  //         config['params'] = args
  //       }
  //       let { data } = await axios(config)
  //       resolve(data)
  //     })
  //   }
  // }
  return {
    get(url, args) {
      return new Promise(async (resolve) => {
        const { data } = await axios({
          baseURL,
          url,
          method: 'GET',
          params: args,
        })
        resolve(data)
      })
    },
    post(url, args) {
      return new Promise(async (resolve) => {
        const { data } = await axios({
          baseURL,
          url,
          method: 'POST',
          data: args,
        })
        resolve(data)
      })
    },
  }
}

const jsphd = axiosCurrying('https://jsonplaceholder.typicode.com')
// const jsphdGet = jsphd('get')

// jsphdGet('posts', {
//   _limit: 5
// }).then((data) => {
//   console.log(data)
// })

jsphd.get('posts', {
  _limit: 5,
}).then((data) => {
  console.log(data)
})