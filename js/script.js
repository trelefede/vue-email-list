console.log('js ok');

const NUM_EMAILS = 10;

const app = new Vue({
    el: '#app',
    data: {
        charged: true,
        mails: [],
    },
    mounted() {

        let countDown = 0;
        for (let i = 0; i < NUM_EMAILS; i++) {
            axios
                .get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((response) => {
                    const { data, status } = response;
                    countDown++;
                    if (status === 200) {
                        this.mails.push(data.response);
                    }
                    if (countDown === NUM_EMAILS) {
                        this.charged = false;
                    }

                });
        }
    }
})



