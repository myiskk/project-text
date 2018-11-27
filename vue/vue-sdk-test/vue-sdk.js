class llwSDK {
    constructor (options) {
        console.log(options)

        this.data = {};
        this.$data = options.data;
        this.methods = options.methods;
    }


    mount () {
        util.observer(this);
        event.init(this);
    }

}
var event = {
    init (vm) {
        let methods = vm.methods;

        Object.keys(methods).forEach((key) => {
            console.log(key)
            document.querySelector('.span').addEventListener('click', methods[key].bind(vm), false);
        });
    },
    bind (vm) {


    }
}

var util = {
    // 逻辑
    initData() {

    },

    renderHtml () {
    },

    observer (vm) {
        let data = vm.data;
        Object.keys(data).forEach((key) => {
            console.log(key)
            Object.defineProperty(data, key, {
                // value: data[key],
                // writable: true,
                // enumerable: true,
                // configurable: false,
                get () {
                    console.log('要改变get')
                    return this[key];
                },
                set (val) {
                    vm.data[key] = val;
                }
            });
        });
    }






}