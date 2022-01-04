const app = Vue.createApp({
    data() {
        return {
            headline: "My Vue.js template",
            greeting: "Hello World!"            
        }
    },
    computed: {

    },
    methods: {
        
    }
});

// mount the app.
const vm = app.mount('#app');