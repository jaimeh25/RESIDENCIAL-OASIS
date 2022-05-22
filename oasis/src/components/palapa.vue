<template>
  <jc-dialog :title="title" v-model="opened">
    <div class="row">
      <div class="col-6">
        <img :src="palapa.imagen" alt="" style="width:150px">
      </div>
      <div class="col-6">
        <q-input filled v-model="date" style="width:150px" label="Fecha a apartar">
          <template v-slot:prepend>
            <q-icon name="event" class="cursor-pointer">
              <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                <q-date v-model="date" mask="DD-MM-YYYY">
                  <div class="row items-center justify-end">
                    <q-btn v-close-popup label="Close" color="primary" flat />
                  </div>
                </q-date>
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>
        <q-input filled v-model="time1" style="width:150px" label="Hora inicial">
          <template v-slot:prepend>
            <q-icon name="access_time" class="cursor-pointer">
              <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                <q-time v-model="time1" mask="HH:mm" format24h>
                  <div class="row items-center justify-end">
                    <q-btn v-close-popup label="Close" color="primary" flat />
                  </div>
                </q-time>
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>
        <q-input filled v-model="time2" style="width:150px" label="Hora final">
          <template v-slot:prepend>
            <q-icon name="access_time" class="cursor-pointer">
              <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                <q-time v-model="time2" mask="HH:mm" format24h>
                  <div class="row items-center justify-end">
                    <q-btn v-close-popup label="Close" color="primary" flat />
                  </div>
                </q-time>
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>
      </div>
    </div>
    <br>
    <div class="text-center">
      <q-btn color="primary" icon="check" label="Apartar palapa" />
    </div>
    <br>
    <div class="text-h6 bg-dark text-white text-center"> Horas apartadas </div>
  </jc-dialog>
</template>

<script>

import { ref } from 'vue'
export default {
  data () {
    return {
      date: ref('2019-02-01'),
      time1: ref('08:00'),
      time2: ref('19:00'),
      opened: false,
      title: 'Sin titulo',
      palapa: {},
      palapas: [
        {
          nombre: 'Palapa 1',
          imagen: "test1.jpg"
        },
        {
          nombre: 'Palapa 2',
          imagen: "test2.jpg"
        },
        {
          nombre: 'Palapa 3',
          imagen: "test3.jpg"
        },
        {
          nombre: 'Palapa 4',
          imagen: "test4.jpg"
        },
        {
          nombre: 'Palapa 5',
          imagen: "test5.jpg"
        },
        {
          nombre: 'Palapa 6',
          imagen: "test6.jpg"
        },
        {
          nombre: 'Cancha',
          imagen: "test7.jpg"
        },
      ]
    }
  },
  methods: {
    open(title){
      this.opened = true
      this.title = title
      this.getPalapa(title)
    },
    getPalapa(title){
      // Consulta API -------Arreglo palapas Provisional
      this.palapa = this.palapas.find(element => element.nombre === title);
      console.log(palapa)
    }
  }
}
</script>

<style>

</style>