<template>
  <div>
    <form @submit.prevent="login_user">
      <div v-if="!isconnected">
        <fieldset>
          <h2>Page de connnexion</h2>

          <label >Adresse email</label>
          <input v-model="email" placeholder=" ex: foot@efrei.com">
          <br><br>
          
          <label>Mot de passe</label>
          <input type="password" v-model="password" placeholder=" Mot de Passe ">
          <br><br>

          <a style="font-size: 12px; color: #e679fcfd">Si vous n'êtes pas connecté, <router-link to ="/register">S'inscrire</router-link></a> 
          <br><br>

          <button type="submit">Se Connecter</button>
        </fieldset>
      </div>
      <h2 v-else>Bravo, vous êtes connecté</h2>
    </form>
    <footer class="certif">
      <p>Perfect Grape © 2022. Tous droits réservés</p>
    </footer>
  </div>
</template>


<script>
module.exports = {
  props: {
    isconnected: {type: Boolean, default: false}
  },
  data () {
    return {
      email: '',
      password: ''
    }
  },
  mounted() {
  },
  methods: {
    async login_user(){
        this.$emit('login', {email: this.email, password : this.password})
    },
  }
}
</script>

<style scoped>
form{
    width: 800px;
    margin-top: 20px;
    margin-left: 250px;
    border: 2px solid white;
}

fieldset{
  padding: 30px;
}

h2{
  font-size: 40px;
  text-align : center;
  margin-bottom: 20px;
}

input{
  color:black;
}

button {
  border-radius:12px 0 12px 0;
  border:none;
  color:black;
  font:bold 14px Verdana;
  padding:10px;
}
button:hover{
    background-color:#e679fcfd;
    opacity:80%;
    text-transform : uppercase;
}

footer {
    height: 4em;
    display: flex;
    justify-content: block;
    padding: 5px;
    color: #fff;
}
    
.certif{
    height: 2.5em;
    justify-content: center;
}
</style>
