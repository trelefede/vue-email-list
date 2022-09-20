console.log('js ok');

const app = new Vue({
    el: '#app',
    data: {
        mails: [],
    },
    mounted() {

        const array = [];
        for (let i = 0; i < 10; i++) {
            axios
                .get('https://flynn.boolean.careers/exercises/api/random/mail')

                .then((response) => {
                    array.push(response.data.response);
                });
        }
        this.mails = array;
    }
})



