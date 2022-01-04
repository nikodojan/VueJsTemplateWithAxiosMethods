const app = Vue.createApp({
    data() {
        return {
            headline: "My Vue.js template",
            greeting: "Hello World!",

            // Properties for API
            apiBaseUrl: "", // TODO: add base url, incl. trailing /
            apiResponseObject1: {}, // TODO: rename 
            apiNewObject: {}, // TODO: rename, evtl. add properties
            deleteId: 0, 
            searchId: 0,
            statusMessage: ""
        }
    },
    computed: {

    },
    methods: {
        AxiosGet: function () {
            axios.get(baseUrl)
            .then(response => {
                this.apiResponseObject = response.data
                // console.log(response.data)
            })
            .catch(function(error){
                console.log(error)
            })
        },
        AxiosGetById: function () {
            axios.get(this.baseUrl + this.searchId)
            .then(response=>{
                console.log(response.status)
                console.log(response.data) // for debugging              
                this.apiResponseObject = []
                this.apiResponseObject.push(response.data)
            })
            .catch(function(error){
                console.log(error)
            })            
        },
        AxiosPost: function(){
            axios.post(baseUrl, this.apiNewObject)
            .then(response=> {
                console.log(response.status)
                this.statusMessage = "Added"
            })
            .catch(function(error) {
                console.log(error)
            })
        },
        AxiosDelete: function(){
            axios.delete(baseUrl + this.deleteId)
            .then(response => {
                console.log(response.status)
                this.HttpGet()
                this.statusMessage = "Deleted"
            })
            .catch(function(error) {
                console.log(error)
                this.statusMessage = error
            })
        }
    },
    created () {
        // this.AxiosGet()
    }
});

// mount the app.
const vm = app.mount('#app');