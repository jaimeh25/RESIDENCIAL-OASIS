<template>
  <jc-dialog :title="title" v-model="opened">
    <div 
    class="text-h6 text-white text-center q-mb-md rounded-borders"
    style="background: radial-gradient(circle, #00B280 0%, #004E2B 100%)"
    > 
      Selecciona Fecha y Horas
    </div>
    <div class="row">
      <div class="col-7">
        <img :src="palapa.imagen" alt="" style="width:200px" class="rounded-borders">
      </div>
      <div class="col-5">
        <q-list bordered separator dense class="rounded-borders">
          <q-item clickable v-ripple>
            <q-item-section side bottom>
              <q-icon name="event" />
            </q-item-section>
            <q-item-section>
              <q-item-label overline>FECHA</q-item-label>
              <q-item-label>{{dateSelect}}</q-item-label>
            </q-item-section>
            <q-popup-proxy cover transition-show="scale" transition-hide="scale">
              <q-date v-model="dateSelect" mask="DD-MM-YYYY">
                <div class="row items-center justify-end">
                  <q-btn v-close-popup label="Close" color="primary" flat />
                </div>
              </q-date>
            </q-popup-proxy>
          </q-item>

          <q-item clickable v-ripple>
            <q-item-section side bottom>
              <q-icon name="access_time" />
            </q-item-section>
            <q-item-section>
              <q-item-label overline>HORA INICIAL</q-item-label>
              <q-item-label>{{hora_ini}}</q-item-label>
            </q-item-section>
            <q-popup-proxy cover transition-show="scale" transition-hide="scale">
              <q-time v-model="time1" mask="HH:mm">
                <div class="row items-center justify-end">
                  <q-btn v-close-popup label="Close" color="primary" flat />
                </div>
              </q-time>
            </q-popup-proxy>
          </q-item>

          <q-item clickable v-ripple>
            <q-item-section side bottom>
              <q-icon name="access_time" />
            </q-item-section>
            <q-item-section>
              <q-item-label overline>HORA FINAL</q-item-label>
              <q-item-label>{{hora_fin}}</q-item-label>
            </q-item-section>
            <q-popup-proxy cover transition-show="scale" transition-hide="scale">
              <q-time v-model="time2" mask="HH:mm">
                <div class="row items-center justify-end">
                  <q-btn v-close-popup label="Close" color="primary" flat />
                </div>
              </q-time>
            </q-popup-proxy>
          </q-item>
        </q-list>
      </div>
    </div>
    <div class="text-red-14 text-weight-bolder text-center"> {{errorMessage}}</div>
    <div class="text-green-9 text-weight-bolder text-center" v-if="save">Se ha apartado la palapa</div>
    <div class="text-center">
      <q-btn color="primary" icon="check" label="Apartar palapa" @click="postApartado()" />
    </div>
    <br>
    <div 
    class="text-h6 text-white text-center q-mb-md rounded-borders"
    style="background: radial-gradient(circle, #00B280 0%, #004E2B 100%)"
    >
      Horas apartadas {{ dateSelect }}
    </div>
    <q-markup-table dense class="q-mb-md">
      <thead class="bg-grey-4">
        <th>De</th>
        <th>A</th>
        <th>Limpieza</th>
      </thead>
      <tbody class="bg-grey-2">
        <tr v-for="(hora, index) in apartados" :key="index">
          <td class="text-center">{{ amPm(hora.entrada) }}</td>
          <td class="text-center">{{ amPm(hora.salida) }}</td>
          <td class="text-center">{{ amPm(hora.limpieza) }}</td>
        </tr>
      </tbody>
    </q-markup-table>
  </jc-dialog>
</template>

<script>

import { ref } from 'vue'
import { date } from 'quasar'
export default {
  props: {
    tel: String,
  },
  data () {
    return {
      errorMessage: '',
      dateSelect: date.formatDate(Date.now(), 'DD-MM-YYYY'),
      time1: ref('17:00'),
      time2: ref('19:00'),
      opened: false,
      title: 'Sin titulo',
      palapa: {},
      apartados: [],
      save: false
    }
  },
  computed: {
    hora_ini () {
      return this.amPm(this.time1)
    },
    hora_fin () {
      return this.amPm(this.time2)
    },
  },
  watch: {
    dateSelect (val) {
      this.limpiar()
    }
  },  
  methods: {
    open(title){
      this.opened = true
      this.title = title
      this.getPalapa()
      this.limpiar()
    },
    getPalapa(){
      this.$api.get(`oasis/palapas/${this.title}`).then(res => {
        this.palapa = res.data
      })
    },
    getApartados(){
      let dDate= this.strDate(this.dateSelect)
      this.$api.get(`oasis/apartados/${this.title}/${date.formatDate(dDate, 'YYYY-MM-DD')}`).then(res => {
        this.apartados = res.data
      })
    },
    postApartado(){
      let dDate= this.strDate(this.dateSelect)
      let post = {
        palapa: this.title,
        tel: this.tel,
        fecha: date.formatDate(dDate, 'YYYY-MM-DD'),
        entrada: this.time1,
        salida: this.time2
      }
      debugger
      this.$api.post('oasis/create_apartado/',post).then(res => {
        if (typeof res.data === "string") { 
          this.errorMessage= res.data
        } else {
          this.save = true
          this.errorMessage= ''
          this.getApartados()
        }
      })
    },
    amPm(hora){
      let h=parseInt(hora.substring(0,2))
      if (h === 12){
        return hora + " PM"
      }
      if (h>12) {
        return String(h-12) + hora.substring(2,5) + " PM"
      } else {
        return hora + " AM"
      }
    },
    strDate(str) {
      return new Date(
        parseInt(str.substring(6,10)),
        parseInt(str.substring(3,5)) - 1,
        parseInt(str.substring(0,2))
        )
    },
    limpiar() {
      this.errorMessage=''
      this.save=false
      this.getApartados()
    }
  }
}
</script>

<style>

</style>