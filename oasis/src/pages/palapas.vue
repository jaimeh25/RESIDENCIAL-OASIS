<template>
  <q-page class="flex flex-center">
    <img id="Image-Maps-Com-image-maps-2022-05-21-223917" src="ResidensialOasis2.jpg" border="0" width="380" height="568" orgWidth="380" orgHeight="568" usemap="#image-maps-2022-05-21-223917" alt="" />
    <map name="image-maps-2022-05-21-223917" id="ImageMapsCom-image-maps-2022-05-21-223917">
      <area  alt="" title="palapa1" @click="$refs.palapa.open('Palapa 1')" shape="rect" coords="226,315,361,347" style="outline:none;" target="_self"     />
      <area  alt="" title="palapa2" @click="$refs.palapa.open('Palapa 2')" shape="rect" coords="228,349,361,383" style="outline:none;" target="_self"     />
      <area  alt="" title="palapa3" @click="$refs.palapa.open('Palapa 3')" shape="rect" coords="227,387,360,418" style="outline:none;" target="_self"     />
      <area  alt="" title="palapa4" @click="$refs.palapa.open('Palapa 4')" shape="rect" coords="227,421,359,452" style="outline:none;" target="_self"     />
      <area  alt="" title="palapa5" @click="$refs.palapa.open('Palapa 5')" shape="rect" coords="226,456,358,487" style="outline:none;" target="_self"     />
      <area  alt="" title="palapa6" @click="$refs.palapa.open('Palapa 6')" shape="rect" coords="226,492,357,523" style="outline:none;" target="_self"     />
      <area  alt="" title="cancha" @click="$refs.palapa.open('Cancha')" shape="rect" coords="232,527,353,557" style="outline:none;" target="_self"     />
      <area  alt="" title="palapaImg1" @click="$refs.palapa.open('Palapa 1')" shape="poly" coords="89,410,81,408,76,403,72,398,70,393,71,386,73,380,78,376,83,373,90,373,97,374,105,380,111,389,111,398,108,403,105,407,98,410" style="outline:none;" target="_self"     />
      <area  alt="" title="palapaImg2" @click="$refs.palapa.open('Palapa 2')" shape="poly" coords="89,519,83,517,79,513,76,508,77,503,79,498,83,495,87,493,94,494,99,496,105,502,106,509,105,514,101,517,98,518,96,519" style="outline:none;" target="_self"     />
      <area  alt="" title="PalapaImg3" @click="$refs.palapa.open('Palapa 3')" shape="poly" coords="98,485,98,473,100,471,104,469,109,473,120,473,121,485" style="outline:none;" target="_self"     />
      <area  alt="" title="palapaImg4" @click="$refs.palapa.open('Palapa 4')" shape="poly" coords="33,463,43,464,49,460,52,456,48,449,41,441,33,441,25,445,27,458" style="outline:none;" target="_self"     />
      <area  alt="" title="palapaImg5" @click="$refs.palapa.open('Palapa 5')" shape="poly" coords="133,266.00001525878906,131,261.00001525878906,133,258.00001525878906,133,254.00001525878906,131,252.00001525878906,127,250.00001525878906,127,241.00001525878906,131,240.00001525878906,138,244.00001525878906,144,250.00001525878906,143,257.00001525878906,144,264.00001525878906,142,267.00001525878906,140,270.00001525878906" style="outline:none;" target="_self"     />
      <area  alt="" title="palapaImg6" @click="$refs.palapa.open('Palapa 6')" shape="poly" coords="160,199,160,186,186,186,187,200" style="outline:none;" target="_self"     />
      <area  alt="" title="canchaImg" @click="$refs.palapa.open('Cancha')" shape="poly" coords="189,152,258,152,257,34,192,37" style="outline:none;" target="_self"     />
    </map>
    <palapa ref="palapa"></palapa>
  </q-page>
</template>

<script>
import palapa from 'components/palapa.vue'

export default {
  components: { palapa },
  data () {
    return {
      opened: false
    }
  },
  methods: {
    open(){
      this.opened = true
    },
    close(){
      this.opened = false
    } 
  }
}
</script>

<style>

</style>
