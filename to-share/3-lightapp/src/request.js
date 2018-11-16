
  import fetch from '@system.fetch'

function getFeedListData (successFn) {
    fetch.fetch({
        url: 'https://v2.sohu.com/integration-api/mix/region/16?page=1&size=40&pvId=1541144404097f4sQFqJ&mpId=272774864&requestId=1811021327472OMV_1541144404196',
        success: function (response) {
            successFn(response);
          console.log(`the status code of the response: ${response.code}`)
          console.log(`the data of the response: ${response.data}`)
          console.log(`the headers of the response: ${JSON.stringify(response.headers)}`)
        },
        fail: function (err, code) {
          console.log(`handling fail, code = ${code}`)
        }
    })
}


  export default {
    getFeedListData,
  }
  