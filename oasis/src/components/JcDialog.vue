<template>
  <q-dialog 
    :value="value"
    @input="updateVal"
    maximized
  >
    <q-card style="width: 100%; height:100%;" class="rounded-t-lg" id="body">
      <div style="width: 100%">
        <q-bar class="text-white" style="min-width: 100%; background: radial-gradient(circle, #00B280 0%, #004E2B 100%)">
          <span class="text-white">{{ title }}</span>
          <q-space />
          <q-btn dense icon="close" v-close-popup>
            <q-tooltip>Close</q-tooltip>
          </q-btn>
        </q-bar>
      </div>
      <q-card-section>
          <div class="z-0" style="overflow: auto; margin-top: 10px">
            <slot name="body"></slot>
            <slot name="default"></slot>
          </div>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script>
export default {
  name: 'JcDialog',
  props: {
    value: {
      type: Boolean,
      default: false
    },
    title: String
  },
  methods: {
    updateVal (newVal) {
      this.$emit('input', newVal)
    },
  }
}
</script>
