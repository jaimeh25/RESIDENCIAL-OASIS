<template>
  <q-dialog 
    :value="value"
    @input="updateVal"
    maximized
    v-model="opened"
    @hide="$emit('update')"
  >
    <div 
    style="width: 100%; height:100%; background: radial-gradient(circle, #00B280 0%, #004E2B 100%)" 
    class="rounded-t-lg text-center" id="body">
      <div class="q-pa-md bg-grey-4 rounded-borders" 
      style="width: 300px; height:450px; margin: 0 auto; margin-top: 50px; "
      >
        <q-input filled v-model="tel" label="Ingrese su telefono" style="width: 100%;" class="q-pa-md" />
        <div class="text-red-14 text-weight-bolder text-center" v-if="error">Numero telefonico invalido </div>
        <br/>
        <div>
          <q-btn color="primary" label="Enviar codigo por SMS" @click="send_sms()" style="width: 80%;" />
        </div>
        <br>
        <div>
          <q-input filled v-model="codigo" label="Ingrese Codigo"  style=" margin: 0 auto; width: 60%;" />
        </div>
        <br>
        <div class="text-weight-bolder text-justify" v-if="sms">Por favor espere un momento a que le llegue un mensaja. En caso de no recibirlo verifique su numero de celular y vuelva a intentarlo. </div>
        <br/>
        <q-btn color="primary" icon="check" label="Acceder" @click="acceder()" style="width: 80%;" />
      </div>
    </div>
  </q-dialog>
</template>

<script>
export default {
  name: 'login',
  data() {
    return {
        tel: '',
        codigo: '',
        opened: true,
        error: false,
        sms: false
    }
  },
  methods: {
    acceder () {
      let post = {
        tel: this.tel,
        codigo: this.codigo
      }
      this.$api.post('oasis/login/', post).then(res => {
        this.error = false
        this.opened= false
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('tel', res.data.tel);
        this.$api.defaults.headers.common['Authorization'] = 'Token ' + localStorage.getItem('token')
      })
      .catch(error => {
          this.error=true
        })
    },
    send_sms () {
      let post = {
        tel: this.tel
      }
      this.$api.post('oasis/sms/', post).then(res => {        
        this.error = false
        this.sms = true
      })
      .catch(error => {
          this.error=true
        })
    }
  },
  created() {
     if (typeof localStorage.getItem('tel') === "string") { 
      this.opened= false
    }
  }
}
</script>
