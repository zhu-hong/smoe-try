const axios = require('axios')
const fs = require('fs')

axios({
  headers: {
    'referer': 'https://www.bilibili.com/',
    'user-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.55 Safari/537.36 Edg/96.0.1054.34',
  },
  url: 'https://cn-jxnc-cmcc-bcache-14.bilivideo.com/upgcxcode/16/09/425490916/425490916_nb2-1-30112.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1638102425&gen=playurlv2&os=bcache&oi=3084531985&trid=00005d046969f5b948368ed93e025c966446u&platform=pc&upsig=031cb84032900c541d320efafadd22e5&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&cdnid=3302&mid=100452267&bvc=vod&nettype=0&orderid=0,3&agrr=0&bw=655901&logo=80000000',
  method: 'GET',
  responseType: 'arraybuffer',
}).then((res) => {
  fs.writeFileSync('彭于晏.mp4', res.data, { encoding: 'binary' })
})