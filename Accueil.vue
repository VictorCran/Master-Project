<template>
<div>
  <div class="flex">
    <div class="block">
      <h2>Prédiction de viticulture pour les amateurs</h2>
      <p>Venez vous formez avec nous avec plaisir !<br> Vous avez à votre disposition une prédiction de cépage et des conseils.</p>
      <button><router-link to='/prediction'>Prédire</router-link></button>
    </div>
    <div class="block">
      <h2>Conseils</h2>
      <h3>Conseil plantation vigne</h3>
      <p>Coupez les racines de quelques centimètres puis pralinez<br> les plants avant de les mettre dans un trou
        de 25-30cm de profondeur,<br> de sorte que le point de greffe soit juste au-dessus du niveau du sol (entre 2 et 5cm).<br>
        Arrosez copieusement. Espacez chaque pied de vigne de 50cm à 1m.<br>Mettez un tuteur d'1m et 
        un manchon en grillage plastifié<br> pour éviter que les brouteurs divers (lapins, cervidés...) saccagent les pousses.<br>
        N'oubliez pas de couvrir le sol par un paillis<br> et laissez l'herbe pousser entre les rangs.<br>
        Le pralin est un mélange de terre du jardin,<br> de bouse de vache et d'eau, qui forme une boue liquide.
      </p>
    </div>
  </div>
  <footer class="certif">
    <p>Perfect Grape © 2022. Tous droits réservés</p>
  </footer>
</div>
</template>

<style scoped>
.flex{
  display:flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

h2, h3, p{
  text-align: center;
}

img{
  width:100%;
}

.block{
  display: block;
  border: 2px solid white;
  border-radius: 40px;
  margin: 30px;
  padding: 30px;
  font-size: large;
  text-align: justify;
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
