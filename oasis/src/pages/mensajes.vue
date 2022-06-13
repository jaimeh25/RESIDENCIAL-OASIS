<template>
  <q-page>
      <div class="text-center bg-teal-8 text-h6 text-white">{{usuario.nombre}}</div>
      <div class="text-center bg-teal-6 text-weight-bold text-white">{{`Lotes: ${strLotes()}`}}</div>
      <div class="text-center bg-teal-4 text-weight-bold text-white">{{`Deuda: ${deuda()}`}}</div>
      <hr>

      <q-card class="text-white"
      style="background: radial-gradient(circle, #35a2ff 0%, #014a88 100%)">
        <q-card-section>
          <div class="text-center text-weight-bold">{{`Mensajes ${mensajes.length}`}}</div>
        </q-card-section>

        <q-separator dark inset />

        <q-card-section>
          <q-list bordered class="rounded-borders">
            <q-expansion-item
              v-for="(mensaje, index) in mensajes"
              :key="index"
              expand-separator
              :label="mensaje.asunto"
              :caption="mensaje.min"
              class="bg-weight-bold rounded-borders"
              :class="color(mensaje.tipo)"
            >
              <q-card>
                <q-card-section class="bg-yellow-2 text-black">
                  {{mensaje.texto}}
                </q-card-section>
              </q-card>
            </q-expansion-item>
          </q-list>
        </q-card-section>
      </q-card>
  </q-page>
</template>

<script>

import numeral from 'numeral';
export default{
  data() {
    return {
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
      },
      mensajes:[
        {
          asunto: 'Deuda vencida de su lote',
          min: 'vencido el 01 marzo 2022',
          texto: `Buenos días Sr Jaime Mendez.
          
          Usted tien un adeudo de $100,000.00 que ha vencido el dia 01 de marzo. Le pedimos de la manera mas atenta realizar su pago a la brevedad.
          
          Attentamente la gerencia`,
          tipo: 1
        },
        {
          asunto: 'Deuda  de su lote',
          min: 'vence el 01 junio 2022',
          texto: `Buenos días Sr Jaime Mendez.
          
          Usted tien un adeudo de $100,000.00 que vencera el dia 01 de junio. Le pedimos de la manera mas atenta realizar su pago a tiempo.
          
          Attentamente la gerencia`,
          tipo: 2
        },
        {
          asunto: 'Reunion redidencial',
          min: 'Fecha: 01 junio 2022',
          texto: `Buenos días Sr Jaime Mendez.
          
         Se le informa que el dia 1 de junio abra una reunion residencial para tocar algunos temas acerca de el parque.
          
          Attentamente la gerencia`,
          tipo: 3
        },
      ]
    }
  },
  methods: {
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
    },
    deuda () {
      let total = 0
      let se= true
      this.usuario.lotes.forEach(function (lote) {
        total += lote.deuda
      });
      return this.currency(total)
    },
    currency(number){
      var myNumeral= numeral(number)
      return myNumeral.format('$0,0.00')
    },
    color(tipo){
      if (tipo == 1) return 'bg-red-7'
      if (tipo == 2) return 'bg-yellow-7'
      if (tipo == 3) return 'bg-blue-7'
    }
  }
}
</script>
