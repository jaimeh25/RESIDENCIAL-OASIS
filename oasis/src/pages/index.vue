<template>
  <div class="flex flex-center">
    <div id="cont" style="position:relative; width: 380px; height:500px;">
      <img id="Image-Maps-Com-image-maps-2022-06-13-001140" src="https://app.image-maps.com/m/private/0/prfbklpfc72bo1hc85ekhka3tf_residensialoasis4.jpg" border="0" width="380" height="583" orgWidth="380" orgHeight="583" usemap="#image-maps-2022-06-13-001140" alt="" />
      <map name="image-maps-2022-06-13-001140" id="ImageMapsCom-image-maps-2022-06-13-001140">
        <area  alt="" title="acceso1" href="tel:+526251477133" shape="rect" coords="229,242,366,315" style="outline:none;" target="_self"     />
        <area  alt="" title="acceso2" href="tel:+526142175113" shape="rect" coords="229,329,366,402" style="outline:none;" target="_self"     />
        <area shape="rect" coords="378,581,380,583" alt="Image Map" style="outline:none;" title="Image Map" href="https://www.image-maps.com/" />
        <area  alt="" title="palapa1" @click="$refs.palapa.open('Palapa 1')" shape="poly" coords="46,548,56,547,60,540,62,532,57,526,55,522,53,520,48,520,41,525,42,531,39,537,39,543" style="outline:none;" target="_self"     />
        <area  alt="" title="palapa2" @click="$refs.palapa.open('Palapa 2')" shape="poly" coords="48,480,28,480,26,472,30,466,33,462,33,457,37,450,47,451,49,460,47,468,43,472" style="outline:none;" target="_self"     />
        <area  alt="" title="palapa3" @click="$refs.palapa.open('Palapa 3')" shape="poly" coords="19,151.99999809265137,25,147.99999809265137,38,147.99999809265137,41,156.99999809265137,39,161.99999809265137,35,172.99999809265137,29,175.99999809265137,22,173.99999809265137,19,163.99999809265137" style="outline:none;" target="_self"     />
        <area  alt="" title="palapa4" @click="$refs.palapa.open('Palapa 4')" shape="poly" coords="144,266,151,260,152,253,151,241,148,239,146,226,135,225,132,234,129,238,129,248,136,256,139,264" style="outline:none;" target="_self"     />
        <area  alt="" title="palapa5" @click="$refs.palapa.open('Palapa 5')" shape="poly" coords="345,220.99999809265137,357,219.99999809265137,359,212.99999809265137,358,203.99999809265137,357,193.99999809265137,357,191.99999809265137,341,192.99999809265137,341,202.99999809265137,337,208.99999809265137,338,216.99999809265137" style="outline:none;" target="_self"     />
        <area  alt="" title="palapa6" @click="$refs.palapa.open('Palapa 6')" shape="poly" coords="102,417,116,412,122,400,120,387,112,381,104,378,94,381,88,388,85,399,87,410,96,415" style="outline:none;" target="_self"     />
        <area  alt="" title="cancha7" @click="$refs.palapa.open('Cancha 7')" shape="poly" coords="202,144,269,143,280,131,277,14,213,16,205,20,200,30" style="outline:none;" target="_self"     />
      </map>

      <span style="position:absolute; top:100px; left: 20px;">{{residente.nombre}}</span>
      <span style="position:absolute; top:120px; left: 20px; width: 150px; text-align: center;">{{`Lotes: ${residente.lotesStr}`}}</span>
    </div>
    <palapa ref="palapa" :tel="residente.tel"></palapa>
  </div>
</template>

<script>
import palapa from 'components/palapa.vue'

export default {
  components: { palapa },
  data () {
    return {
      opened: false,
      residente: {},
      usuario: {
        nombre: 'Jaime Mendez Enriquez',
        lotes: [
          {
            lote: 'L11',
            deuda: 5000
          },
          {
            lote: 'L12',
            deuda: 5000
          }
        ]
      }
    }
  },
  methods: {
    open(){
      this.opened = true
    },
    close(){
      this.opened = false
    },
    strLotes () {
      let cadena=''
      let se= true
      this.usuario.lotes.forEach(function (lote) {
        if (se) {
          se = false
        } else{
          cadena += ', ' 
        }
        cadena += lote.lote
      });
      return cadena
    }
  },
  created() {
    let tel = '6251020347'
    this.$api.get(`oasis/residentes/${tel}`).then(res => {
        this.residente = res.data
      })
  }
}
</script>

<style>

</style>
