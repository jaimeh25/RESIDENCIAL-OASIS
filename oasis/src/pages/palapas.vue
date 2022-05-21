<template>
  <q-page class="flex flex-center">
    <img id="Image-Maps-Com-image-maps-2022-05-21-011626" src="https://app.image-maps.com/m/private/0/p07ug494b0110s75l34hem5qn6_residensialoasis.jpg" border="0" width="854" height="1280" orgWidth="854" orgHeight="1280" usemap="#image-maps-2022-05-21-011626" alt="" />
    <map name="image-maps-2022-05-21-011626" id="ImageMapsCom-image-maps-2022-05-21-011626">
      <area  alt="" title="palapa1" @click="open()" shape="rect" coords="515,711,801,781" style="outline:none;" target="_self"     />
      <area  alt="" title="palapa2" href="http://www.image-maps.com/" shape="rect" coords="513,796,798,857" style="outline:none;" target="_self"     />
      <area  alt="" title="palapa3" href="http://www.image-maps.com/" shape="rect" coords="515,872,798,935" style="outline:none;" target="_self"     />
      <area  alt="" title="palapa4" href="http://www.image-maps.com/" shape="rect" coords="515,951,800,1017" style="outline:none;" target="_self"     />
      <area  alt="" title="palapa5" href="http://www.image-maps.com/" shape="rect" coords="515,1030,796,1096" style="outline:none;" target="_self"     />
      <area  alt="" title="palapa6" href="http://www.image-maps.com/" shape="rect" coords="515,1110,801,1180" style="outline:none;" target="_self"     />
      <area  alt="" title="cancha" href="http://www.image-maps.com/" shape="rect" coords="532,1190,786,1255" style="outline:none;" target="_self"     />
      <area shape="rect" coords="852,1278,854,1280" alt="Image Map" style="outline:none;" title="Image Map" href="https://www.image-maps.com/" />
      <area  alt="" title="canchaImg" href="http://www.image-maps.com/" shape="poly" coords="578,343,576,80,437,85,430,342" style="outline:none;" target="_self"     />
      <area  alt="" title="palapaImg6" href="http://www.image-maps.com/" shape="poly" coords="362,447,362,425,363,416,418,418,421,450" style="outline:none;" target="_self"     />
      <area  alt="" title="palapaImg5" href="http://www.image-maps.com/" shape="poly" coords="300,600,296,590,298,584,303,580,299,577,298,571,296,570,288,566,282,561,282,553,284,548,290,545,299,543,306,551,310,559,320,564,320,573,317,581,320,590,320,598,312,604" style="outline:none;" target="_self"     />
      <area  alt="" title="palapaImg1" @click="open()" shape="poly" coords="192,839.9999389648438,172,849.9999389648438,181,845.9999389648438,179,843.9999389648438,164,858.9999389648438,160,871.9999389648438,160,888.9999389648438,163,903.9999389648438,177,915.9999389648438,190,922.9999389648438,205,924.9999389648438,219,920.9999389648438,229,916.9999389648438,238,909.9999389648438,242,899.9999389648438,247,889.9999389648438,247,879.9999389648438,243,869.9999389648438,239,859.9999389648438,233,853.9999389648438,222,849.9999389648438,224,847.9999389648438,219,843.9999389648438,208,839.9999389648438" style="outline:none;" target="_self"     />
      <area  alt="" title="palapaImg2" href="http://www.image-maps.com/" shape="poly" coords="194,1169,178,1157,173,1145,173,1132,180,1120,189,1114,204,1110,220,1116,227,1124,233,1137,233,1152,225,1163,231,1162,221,1169,232,1160,215,1170" style="outline:none;" target="_self"     />
      <area  alt="" title="palapaImg3" href="http://www.image-maps.com/" shape="poly" coords="223,1089,222,1070,224,1060,232,1060,240,1064,255,1066,268,1066,272,1094,252,1095,232,1093" style="outline:none;" target="_self"     />
    <area  alt="" title="palapaImg4" href="http://www.image-maps.com/" shape="poly" coords="99,1030,94,1037,85,1042,77,1036,73,1033,72,1027,74,1021,78,1018,82,1016,86,1012,94,1012,101,1017,102,1025" style="outline:none;" target="_self"     />
    </map>
  <jc-dialog title="kdfnvlo" v-model="opened">
    <div>Aqui</div>
  </jc-dialog>
  </q-page>
</template>

<script>

export default {
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
