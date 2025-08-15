<template>
  <v-container fluid>    
    <v-img :src="logo" contain max-width="200"></v-img>

    <v-row>
      <v-col cols="12" >
        <h1>Clientes</h1>
        
        <!-- Tabla de clientes -->
        <div style="overflow-x:auto;">
          <v-data-table
            :headers="headers"
            :items="clients"
            item-key="id"
            class="elevation-1"
            :dense="true"
          >
            <template v-slot:item.actions="{ item }">
              <v-btn color="blue" small @click="updateClient(item.id)">Editar</v-btn>
              <v-btn color="red" small @click="deleteClient(item.id)">Borrar</v-btn>
            </template>
          </v-data-table>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>


<script>
import { mapGetters, mapActions } from 'vuex'
import logo from '@/assets/logo.png'//import image logo

export default {
  computed: {
    ...mapGetters(['getAllClients']),// get the funcion from vuex that has the base clients
    clients() { // return the client list
      return this.getAllClients 
    }
  },
  data() {
    return {
      logo,  // app logo
      headers: [ // colum table
        { text: 'name', value: 'name' },
        { text: 'lastName', value: 'lastName' },
        { text: 'email', value: 'email' },
        { text: 'phoneNumber', value: 'phoneNumber' },
        { text: 'actions', value: 'actions', sortable: false }
      ]
    }
  },
  methods: {
    ...mapActions(['deleteClient']),
    editar(id) {
      console.log('Editar cliente con ID:', id)
    }
  }
}
</script>

