window.onload = function () {
    console.log(llwSDK);
    new llwSDK({
        el: '#app',
        data: {
            hi: 'hellow',
            count: 10
        },
        methods: {
            handerClick () {
                this.data.count = this.data.count + 1;
                console.log(this.data.count)
            }
        }
    }).mount();
}