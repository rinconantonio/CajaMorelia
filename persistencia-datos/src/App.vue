<script setup></script>

<template>
  <v-app>
    <ListaClientes />
  </v-app>
</template>

<script>
import ListaClientes from './views/ClientsList.vue'

export default {
  components: {
    ListaClientes
  }
}
</script>


<style scoped></style>
