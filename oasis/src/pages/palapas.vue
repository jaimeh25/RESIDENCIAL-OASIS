<template>
  <q-page class="flex flex-center">
    <img
      alt="Quasar logo"
      src="~assets/quasar-logo-vertical.svg"
      style="width: 200px; height: 200px"
      @click="open()"
    >
  nnnnnn
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
