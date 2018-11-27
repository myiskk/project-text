window.onload = function () {
    console.log(llwSDK);
    new llwSDK({
        el: 'app',
        data: {
            hi: 'hellow'
        },
        methods: {
            handerClick () {
                this.data.hi = 'mmmmmmmmmm'
                console.log(this.data.hi);
            }
        }
    }).mount();
}