const app = Vue.createApp({
    data() {
        return {
            headline: "My Vue.js template",

            // Properties for API
            // TODO: add base url, incl. trailing /
            baseUrl: "https://my-json-server.typicode.com/nikodojan/my-json-server/items/", 
            // TODO: rename, evtl. add properties
            apiResponseObject: [], // api response
            apiNewObject: { // object for posting
                id: 0, name: "", quantity: 0
            }, 
            deleteId: 0, 
            searchId: 0
        }
    },
    computed: {

    },
    methods: {
        AxiosGet: function () {
            axios.get(this.baseUrl)
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
            axios.get(this.baseUrl + this.searchId)
            .then(response=>{
                console.log(response.status)
                console.log(response.data) // for debugging              
                this.apiResponseObject = []
                this.apiResponseObject.push(response.data)
            })
            .catch(function(error){
                console.log(error)
            });            
        },
        AxiosPost: function(){
            axios.post(this.baseUrl, this.apiNewObject)
            .then(response=> {
                console.log(response.status)
                this.AxiosGet()
            })
            .catch(function(error) {
                console.log(error)
            })
        },
        AxiosDelete: function(){
            axios.delete(this.baseUrl + this.deleteId)
            .then(response => {
                console.log(response.status)
                this.AxiosGet()
            })
            .catch(function(error) {
                console.log(error)
            })
        }
    },
    created () {
        this.AxiosGet()
    }
});

// mount the app, assign the app to a constant for debugging
const vm = app.mount('#app');
