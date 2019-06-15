/**
 *
 * @param {*} urls String[]
 * @param {*} max number   控制请求的并发度？
 * @param {*} callback function 所有请求执行完成后的回调函数
 */
  // 模拟请求
  function fetch (url, fetchCallback) {
      setTimeout(() => {
          console.log(url, '去请求url')
          fetchCallback(); // 成功后回掉
      }, 500)
  }

  function sendRequest(urls = [], max = 5, callback = () => {}) {
      let doneIndex = max - 1;
      // 先push进去max条
      for (let i = 0; i < max; i++) {
          push(i);   
      }
      // 入
      function push (i) {
          
        let index = i === undefined ? doneIndex : i;
        fetch(urls[index], () => { 
            ++doneIndex;
            shift();
            console.log('doneIndex', doneIndex)
        });        
      }

      // 出
      function shift () {
        if (doneIndex > urls.length - 1) { // 全部执行完毕调用callback
            callback();
            return;
        } else {
            push();
        }
      }
  }

  sendRequest([1,2,3,4], 2, function() {
      console.log('我完毕了')
  })





