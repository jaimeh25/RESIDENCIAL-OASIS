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
      style="width: 300px; height:200px; margin: 0 auto; margin-top: 50px; "
      >
        <q-input filled v-model="tel" label="Ingrese su telefono" style="width: 100%;" class="q-pa-md" />
        <div class="text-red-14 text-weight-bolder text-center" v-if="error">Numero telefonico invalido </div>
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
        opened: true,
        error: false
    }
  },
  methods: {
    acceder () {
      let post = {
        tel: this.tel
      }
      this.$api.post('oasis/login/', post).then(res => {
        this.error = false
        this.opened= false
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('tel', res.data.tel);
      })
      .catch(error => {
          this.error=true
        })
    },
  },
  created() {
     if (typeof localStorage.getItem('tel') === "string") { 
      this.opened= false
    }
  }
}
</script>
