<template>
<div>
  <div class="flex">
    <div class="block">
      <h3>Vous devez récolter votre vigne entre : </h3>
      <!-- Mettre la prédiction -->
    </div>

    <div class="block">
      <div class="predict" style="padding-top:0px">
        <h3>Département</h3>
        <select v-model="selected">
        <option disabled value="">Veuillez choisir :</option>
          
        <option disabled value="">Auvergne-Rhône-Alpes</option>
            <option>Ain 01</option>
            <option>Allier 03</option>
            <option>Ardèche 07</option>
            <option>Cantal 15</option>
            <option>Drôme 26</option>
            <option>Isère 38</option>
            <option>Loire 42</option>
            <option>Haute-Loire 43</option>
            <option>Puy-de-Dôme 63</option>
            <option>Rhône 69</option>
            <option>Savoie 73</option>
            <option>Haute-Savoie 74</option>
        <option disabled value="">Bourgogne-Franche-Comté</option>
            <option>Côte-d'Or 21</option>
            <option>Doubs 25</option>
            <option>Jura 39</option>
            <option>Nièvre 58</option>
            <option>Haute-Saône 70</option>
            <option>Saône-et-Loire 71</option>
            <option>Yonne 89</option>
            <option>Territoire de Belfort 90</option>
        <option disabled value="">Bretagne</option>
            <option>Côtes-d'Armor 22</option>
            <option>Finistère 29</option>
            <option>Ille-et-Vilaine 35</option>
            <option>Morbihan 56</option>
        <option disabled value="">Centre-Val de Loire</option>
            <option>Cher 18</option>
            <option>Eure-et-Loir 28</option>
            <option>Indre 36</option>
            <option>Indre-et-Loire 37</option>
            <option>Loir-et-Cher 41</option>
            <option>Loiret 45</option>
        <option disabled value="">Corse</option>
            <option>Corse-du-Sud 2A</option>
            <option>Haute-Corse 2B</option>
        <option disabled value="">Grand Est</option>
            <option>Ardennes 08</option>
            <option>Aube 10</option>
            <option>Marne 51</option>
            <option>Haute-Marne 52</option>
            <option>Meurthe-et-Moselle 54</option>
            <option>Meuse 55</option>
            <option>Moselle 57</option>
            <option>Bas-Rhin 67</option>
            <option>Haut-Rhin 68</option>
            <option>Vosges 88</option>
        <option disabled value="">Hauts-de-France</option>
            <option>Aisne 02</option>
            <option>Nord 59</option>
            <option>Oise 60</option>
            <option>Pas-de-Calais 62</option>
            <option>Somme 80</option>
        <option disabled value="">Île-de-France</option>
            <option>Paris 75</option>
            <option>Seine-et-Marne 77</option>
            <option>Yvelines 78</option>
            <option>Essonne 91</option>
            <option>Hauts-de-Seine 92</option>
            <option>Seine-Saint-Denis 93</option>
            <option>Val-de-Marne 94</option>
            <option>Val-d'Oise 95</option>
        <option disabled value="">Normandie</option>
            <option>Calvados 14</option>
            <option>Eure 27</option>
            <option>Manche 50</option>
            <option>Orne 61</option>
            <option>Seine-Maritime 76</option>
        <option disabled value="">Nouvelle-Aquitaine</option>
            <option>Charente 16</option>
            <option>Charente-Maritime 17</option>
            <option>Corrèze 19</option>
            <option>Creuse 23</option>
            <option>Dordogne 24</option>
            <option>Gironde 33</option>
            <option>Landes 40</option>
            <option>Lot-et-Garonne 47</option>
            <option>Pyrénées-Atlantiques 64</option>
            <option>Deux-Sèvres 79</option>
            <option>Vienne 86</option>
            <option>Haute-Vienne 87</option>
        <option disabled value="">Occitanie</option>
            <option>Ariège 09</option>
            <option>Aude 11</option>
            <option>Aveyron 12</option>
            <option>Gard 30</option>
            <option>Haute-Garonne 31</option>
            <option>Gers 32</option>
            <option>Hérault 34</option>
            <option>Lot 46</option>
            <option>Lozère 48</option>
            <option>Hautes-Pyrénées 65</option>
            <option>Pyrénées-Orientales 66</option>
            <option>Tarn 81</option>
            <option>Tarn-et-Garonne 82</option>
        <option disabled value="">Pays de la Loire</option>
            <option>Loire-Atlantique 44</option>
            <option>Maine-et-Loire 49</option>
            <option>Mayenne 53</option>
            <option>Sarthe 72</option>
            <option>Vendée 85</option>
        <option disabled value="">Provence-Alpes-Côte d'Azur</option>
            <option>Alpes-de-Haute-Provence 04</option>
            <option>Hautes-Alpes 05</option>
            <option>Alpes-Maritimes 06</option>
            <option>Bouches-du-Rhône 13</option>
            <option>Var 83</option>
            <option>Vaucluse 84</option>
        </select>
      </div>

      <div class="predict">
        <div class="cepsol">
          <h3> Type de cépage</h3>
          <select v-model="selected">
          <option disabled value="">Choisissez</option>
          <option></option>
          </select>
        </div>
        <div class="cepsol">
          <h3> Type de sol</h3>
          <select v-model="selected">
          <option disabled value="">Choisissez</option>
          <option></option>
          </select>
        </div>
      </div>
    </div>
  </div>
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
.predict{
  display:flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding:70px;
}

.cepsol{
  display:flex;
  margin-right:60px;
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
