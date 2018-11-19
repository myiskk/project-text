
  import fetch from '@system.fetch'

function getFeedListData (successFn) {
    fetch.fetch({
        url: 'http://v2.sohu.com/integration-api/pure/feedByRegion/16?page=1&size=40',
        method: 'GET',
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
  