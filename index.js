const baseUri = "http://localhost:5010/api/Records"

Vue.createApp({
    data() {
        return {
            records: [],
            error: null,
        }
    },
    async created() {
        // created() is a life cycle method, not an ordinary method
        // created() is called automatically when the page is loaded
        console.log("created method called")
        this.helperGetPosts(baseUri)
    },
    methods: {
        async helperGetPosts(uri) {
            try {
                const response = await axios.get(uri)
                this.records = await response.data
                this.error = null
            } catch (ex) {
                this.records = []
                this.error = ex.message
            }
        }
    }
}).mount("#app")