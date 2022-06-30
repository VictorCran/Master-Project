<template>
    <div>
        <form @submit.prevent="createUser()" action="/">
            <div>
                <fieldset>
                    <h2>Page d'inscription</h2>

                    <label>Adresse email</label>
                    <input v-model="email" placeholder="email">
                    <br><br>

                    <label>Mot de passe</label>
                    <input type="password" v-model="password" placeholder="password">
                    <br><br>

                    <button type="submit">S'inscrire</button>
                </fieldset>
            </div>
        </form>
        <footer class="certif">
            <p>Perfect Grape © 2022. Tous droits réservés</p>
        </footer>
    </div>
</template>

<script>
module.exports = {
props: {
  },
  data() {
    return {
      email: '',
      password: ''
    }
  },
  async mounted () {
  },
  methods: {
    async createUser() {
      await axios.post('/api/register', {
        email: this.email,
        password: this.password
      })
      this.$router.push('/')
    }
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
    color: black;
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
