const Prediction = window.httpVueLoader('./components/Prediction.vue')
const Conseils = window.httpVueLoader('./components/Conseils.vue')
const Map = window.httpVueLoader('./components/Map.vue')
const Aboutus = window.httpVueLoader('./components/Aboutus.vue')

const Register = window.httpVueLoader('./components/Register.vue')
const Login = window.httpVueLoader('./components/Login.vue')

const Accueil = window.httpVueLoader('./components/Accueil.vue')


const routes = [
    { path: '/accueil', component: Accueil },
    { path: '/', component: Accueil },
    { path: '/prediction', component: Prediction },
    { path: '/conseils', component: Conseils },
    { path: '/map', component: Map },
    { path: '/aboutus', component: Aboutus },

    { path: '/register', component: Register },
    { path: '/login', component: Login },
]

const router = new VueRouter({
    routes
})

var app = new Vue({
    router,
    el: '#app',
    data: {
        prediction: [],
        conseils: [],
        map: [],
        aboutus: [],
        user: undefined,
        isConnected: false
    },
    async mounted() {

        axios.get('/api/prediction').then(res => this.prediction = res.data)
        axios.get('/api/conseils').then(res => this.conseils = res.data)
        axios.get('/api/map').then(res => this.map = res.data)
        axios.get('/api/aboutus').then(res => this.aboutus = res.data)

        axios.get('/api/me').then(res => {
            this.user = res.data
            this.isConnected = true
            this.getEquipe()
        }).catch(err => console.log('Vous n\'etes pas connecté'))
    },
    methods: {
        async register(data) {
            await axios.post('/api/register', data).then(response => {
                router.replace({
                    name: 'home'
                })
            }).catch(error => {
                if (error.response.data.code === 0) {
                    this.invaliddata = true
                }
            });
        },

        async login(user) {
            const res = await axios.post('/api/login', user)
            this.user = res.data
            this.isConnected = true
            this.$router.push('/')
            this.getEquipe()
        },

        async disconnect() {
            await axios.delete('/api/me')
            this.isConnected = false
            this.user = undefined
        }
    }
})