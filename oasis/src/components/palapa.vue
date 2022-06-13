<template>
  <jc-dialog :title="title" v-model="opened">
    <div class="row">
      <div class="col-7">
        <img :src="palapa.imagen" alt="" style="width:200px">
      </div>
      <div class="col-5">
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
    <q-markup-table dense>
      <tbody>
        <tr v-for="(hora, index) in palapa.horas" :key="index">
          <td class="text-left">De:</td>
          <td class="text-right">{{ hora.de }}</td>
          <td class="text-left">a:</td>
          <td class="text-right">{{ hora.a }}</td>
          <td class="text-left">regla 30min:</td>
          <td class="text-right">{{ hora.regla30 }}</td>
        </tr>
      </tbody>
    </q-markup-table>
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
          imagen: "palapa1.jpeg",
          horas: [
            {
              de: '8:00',
              a: '12:00',
              regla30: '12:30'
            },
            {
              de: '12:30',
              a: '16:00',
              regla30: '16:30'
            },
          ]
        },
        {
          nombre: 'Palapa 2',
          imagen: "palapa2.jpeg",
          horas: [
            {
              de: '8:00',
              a: '19:00',
              regla30: '19:30'
            },
            {
              de: '12:30',
              a: '16:00',
              regla30: '16:30'
            },
          ]
        },
        {
          nombre: 'Palapa 3',
          imagen: "palapa3.jpeg",
          horas: [
            {
              de: '8:00',
              a: '11:00',
              regla30: '11:30'
            },
            {
              de: '12:00',
              a: '14:00',
              regla30: '14:30'
            },
            {
              de: '15:00',
              a: '18:00',
              regla30: '18:30'
            }
          ]
        },
        {
          nombre: 'Palapa 4',
          imagen: "palapa4.jpeg",
          horas: [
            {
              de: '8:00',
              a: '13:00',
              regla30: '13:00'
            }
          ]
        },
        {
          nombre: 'Palapa 5',
          imagen: "palapa5.jpeg",
          horas: [
            {
              de: '8:00',
              a: '11:00',
              regla30: '11:30'
            },
            {
              de: '13:30',
              a: '18:00',
              regla30: '16:30'
            },
          ]
        },
        {
          nombre: 'Palapa 6',
          imagen: "palapa6.jpeg",
          horas: [
            {
              de: '12:00',
              a: '19:00',
              regla30: '19:30'
            }
          ]
        },
        {
          nombre: 'Cancha 7',
          imagen: "cancha7.jpeg",
          horas: [
            {
              de: '8:00',
              a: '10:00',
              regla30: '10:30'
            },
            {
              de: '10:30',
              a: '12:30',
              regla30: '13:00'
            },
            {
              de: '13:00',
              a: '15:00',
              regla30: '15:30'
            },
            {
              de: '15:30',
              a: '17:30',
              regla30: '18:00'
            },
          ]
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