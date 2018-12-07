
class llwSDK {
    constructor(options) {
        this.$el = options.el;
        this.data = options.data.call(vm, vm);
        this._data = options.data.call(vm, vm);
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
            _data = vm._data,
            dep = this.dep;
        Object.keys(data).forEach((key) => {
            $data[key] = data[key];
            Object.defineProperty(data, key, {
                get() {
                    Dep.target && dep.addMaps(Dep.target, key)
                    return _data[`${key}`];
                },
                set(val) {
                    _data[`${key}`] = val;
                    dep.notify(key);
                }
            });
        });
    }
}

// 解析模板指令，将模板中的变量替换成数据
class Compile {
    constructor (vm) {
        this.vm = vm;
    }
    compile () {
        let el = document.querySelector(this.vm.$el);
        console.log(el);

        let childNodes = el.childNodes;
        [].slice.call(childNodes).forEach((node) => {
            console.log(node);
            this.renderText(node)
        });
    }
    renderText (node) {
        let reg = /\{\{(.*)\}\}/; // 表达式文本
        let text = node.textContent;
        if (reg.test(text)) {
            let dataKey = text.replace(/\{\{|\}\}/g, '');
            new Watcher({
                vm: this.vm,
                exp: dataKey,
                cb (value, oldValue) {
                    node.textContent = value
                }
            }).run();
        }
    }

    filterSpecialLetter(tpl) {
        tpl.replace(/(\n+)|(\r+)|(\n*\r*)|(\u000A|\u000D|\u2028|\u2029)*/g,"");
        console.log(tpl);
    }
}

class Watcher {
    constructor(options) {
        this.cb = options.cb;
        this.vm = options.vm;
        this.exp = options.exp;
        this.value = null;      
    }
    update () {
        this.run();
    }
    run () {
        var value = this.get(); // 取到最新值
        var oldVal = this.value;
        if (value !== oldVal) {
            this.value = value;
            this.cb.call(this.vm, value, oldVal); // 执行Compile中绑定的回调，更新视图
        }
    }
    get () {
        Dep.target = this;	// 将当前订阅者指向自己
        var value = this.vm.data[this.exp];	// 触发getter，添加自己到属性订阅器中
        Dep.target = null;	// 添加完毕，重置
        return value;
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
    addMaps (target, key) {
        this.subsMap[key] = target
    }

    notify(key) {
        this.subsMap[key].update();
    }
}
