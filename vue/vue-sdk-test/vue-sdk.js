

class llwSDK {
    constructor(options) {
        this.$el = options.el;
        this.data = options.data;
        this.$data = {};
        this.methods = options.methods;
    }


    mount() {
        init.initData(this);
        init.initEvent(this);
        init.initRender(this);
    }
}


var init = {
    initData(vm) {
        vm._ob_ = new Observer(vm);
        vm._ob_.observer(vm);
    },
    initEvent(vm) {
        let methods = vm.methods;
        Object.keys(methods).forEach((key) => {
            document.querySelector('.span').addEventListener('click', methods[key].bind(vm), false);
        });
    },
    initRender(vm) {
        vm._compile_ = new Compile(vm);
        vm._compile_.compile(vm)
    }
}

class Observer {
    constructor() {
        this.dep = new Dep();
    }

    observer(vm) {
        let data = vm.data,
            $data = vm.$data;
        Object.keys(data).forEach((key) => {
            $data[key] = data[key];
            this.dep.addSub(key);
            Object.defineProperty(data, key, {
                get() {
                    return $data[`${key}`];
                },
                set(val) {
                    $data[`${key}`] = val;
                    this.dep.notify(vm, key);
                }
            });
        });
    }
    update () {

    }
}


// 解析模板指令，将模板中的变量替换成数据
class Compile {
    constructor (vm) {
        this.vm = vm;
    }
    compile () {
        let el = document.querySelector(this.vm.$el);
        let childNodes = el.childNodes;
        [].slice.call(childNodes).forEach((node) => {
            this.renderText(node)
        });
    }
    renderText (node) {
        let reg = /\{\{(.*)\}\}/; // 表达式文本
        let text = node.textContent;
        if (reg.test(text)) {
            let dataKey = text.replace(/\{\{|\}\}/g, '');
            node.textContent = this.vm.data[dataKey]
            console.log(this.vm._ob_)
        }
    }
}


let uid = 0
class Dep {
    constructor(vm) {
        this.vm = vm;
        this.id = uid++;
        this.subs = []
        this.subsMap = {}
    }

    addSub(key, node) {
        this.subsMap[key] = {
            node: node
        }
    }

    notify(key) {
        // this.vm.data[]
    }
}
