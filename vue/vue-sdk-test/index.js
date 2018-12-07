window.onload = function () {
    new llwSDK({
        el: '#app',
        data () {
            return {
                hi: 'hellow',
                count: 10
            }
        },
        methods: {
            handerClick () {
                this.data.count = this.data.count + 1;
                this.data.hi = this.data.hi + 'x';
            }
        }
    }).mount();
}