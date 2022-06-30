<template>
  <div>
    <h2>À propos de nous</h2><br>

    <p>
    Nous sommes un groupe d'étudiants de l'Efrei Paris en master 1 :
    Youssef EL TANAHI, Émeline LAHAYE, Aurélien LUCAS, Cihan ONARAN, Dominik RADZIK, Kevin SRITHARAN, Victor TRAN et Ambroise de WATTRIPONT.
    Nous avons créé ce site web permettant aux amateurs de pouvoir cultiver leur propre vigne de raisin spécialement pour le vin.
    Nous avons fait ce site dans le cadre de notre projet de master 1.
    </p> <br>

    <form>
        <h3> Un commentaire ? Une question ? N'hésitez pas à nous en faire part !</h3>
        <textarea></textarea>
        <button>Envoyer</button>
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
}
</script>

<style scoped>

.flex{
  display:flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

img{
  width:260px;
  height:260px;
}


h2{
  font-size: 40px;
  text-align : center;
}

h3{
  font-size: large;
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
