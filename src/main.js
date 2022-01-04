const app = Vue.createApp({
    data() {
        return {
            headline: "My Vue.js template",
            greeting: "Hello World!",

            // Properties for API
            apiBaseUrl: "https://webapicar20190326034339.azurewebsites.net/api/cars", // TODO: add base url, incl. trailing /
            apiResponseObject: [], // TODO: rename 
            apiNewObject: null, // TODO: rename, evtl. add properties
            deleteId: 0, 
            searchId: 0,
            statusMessage: ""
        }
    },
    computed: {

    },
    methods: {
        AxiosGet: function () {
            axios.get(this.apiBaseUrl)
            .then(response => {                
                this.apiResponseObject = response.data
                console.log(response.status)
                console.log(response.data)
            })
            .catch(function(error){
                console.log(error)
            })
        },
        AxiosGetById: function () {
            axios.get(this.apiBaseUrl + this.searchId)
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
            axios.post(this.apiBaseUrl, this.apiNewObject)
            .then(response=> {
                console.log(response.status)
                this.statusMessage = "Added"
            })
            .catch(function(error) {
                console.log(error)
            })
        },
        AxiosDelete: function(){
            axios.delete(this.apiBaseUrl + this.deleteId)
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
        this.AxiosGet()
        console.log("created called")
    }
});

// mount the app.
const vm = app.mount('#app');