    // 第一个例子
    // var x = []

    // var grow = function(){

    //     x.push(new Array(1000000))
    // }

    // setInterval(function(){
    //     grow()
    // },1000)


    // 第二个例子
    // var run = function(){

    //     var d = [];

    //     for(var i = 0; i<100000; i++){

    //         d.push(Math.random())
    //     }

    // }

    // setInterval(function(){
    //     run()
    // },100);



    // 第三个例子
    // function ClassLLW(name){
    //     this.name = name
    // }

    // var llw = new ClassLLW("luluwen")

    // llw.age = new Array(1000000).join('no')



    // 第四个 0
    // var div1 = document.createElement('div')
    // var div2 = document.createElement('div')

    // document.body.appendChild(div1);

    // 第五个
    // var text1 = 'im a test'
    // var text2 = 'im a test'
    // var text3 = 'im a test'
    // var text4 = 'im a test1'


    // 第五个
    var arr = [];

    var add = function(){
        arr.push(new Array(1000))
    }

    var del = function(){
        arr[arr.length-1] = null;
    }

    setInterval(function(){
        add();
    },1000);

    setInterval(function(){
        del();
    },2000);

