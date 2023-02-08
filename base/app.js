const app = Vue.createApp({
    /* template:`
    <h1>Hello World</h1>
    <p>Desde app.js</p>
    <p> {{ true ? 'Activo' : 'Inactivo' }} </p>
    ` */
    data(){
        return{
            //message: 'Hello world!!'
            quote: 'I am Batman',
            author: 'Bruce Wayne'
        }
    },
    methods: {
        changeQuote(){
            console.log('Hello World')
            this.author='Osvaldo Maye'

            this.capitalize()
        },
        capitalize(){
            this.quote = this.quote.toUpperCase()
        }
    }
})
app.mount('#myApp')


