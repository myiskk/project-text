
  import fetch from '@system.fetch'

function getFeedListData (successFn) {
    fetch.fetch({
        url: 'https://v2.sohu.com/integration-api/mix/region/16?page=1&size=40&pvId=1541144404097f4sQFqJ&mpId=272774864&requestId=1811021327472OMV_1541144404196',
        success: function (response) {
          successFn(response);
        },
        fail: function (err, code) {
          console.log(`handling fail, code = ${code}`)
        }
    })
}

  export default {
    getFeedListData
  }
  