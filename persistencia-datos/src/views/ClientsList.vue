<template>
  <v-container fluid>    
    <v-img :src="logo" contain max-width="200"></v-img>

    <v-row>
      <v-col cols="12" >
        <h1>Clientes</h1>
        
        <div style="overflow-x:auto;">
          <!-- start clients table -->
          <v-data-table
            :headers="headers"
            :items="clients"
            item-key="id"
            class="elevation-1"
          >
            <template v-slot:item.actions="{ item }">
              <v-btn color="blue" small @click="openModal(item)">Editar</v-btn>
              <v-btn color="red" small @click="deleteClient(item.id)">Borrar</v-btn>
            </template>
          </v-data-table>
          <!-- ends clients table -->

          <!-- starts modal edit -->
          <v-dialog v-model="showModal" max-width="500">
            <v-card>
              <v-card-title>Editar Cliente</v-card-title>
              <v-card-text>
                <v-text-field v-model="editedClient.name" label="Nombre"></v-text-field>
                <v-text-field v-model="editedClient.lastName" label="Apellido"></v-text-field>
                <v-text-field v-model="editedClient.country" label="País"></v-text-field>
                <v-text-field v-model="editedClient.email" label="Email"></v-text-field>
                <v-text-field v-model="editedClient.phoneNumber" label="Teléfono"></v-text-field>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="closeModal">Cancelar</v-btn>
                <v-btn color="green darken-1" text @click="saveChanges">Guardar</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <!-- ends modal edit -->

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
        { text: 'Nombre', value: 'name' },
        { text: 'lastName', value: 'lastName' },
        { text: 'country', value: 'country' },
        { text: 'email', value: 'email' },
        { text: 'phoneNumber', value: 'phoneNumber' },
        { text: 'actions', value: 'actions', sortable: false }
      ],
      showModal: false,      // manipulate modal visibility
      editedClient: null     // aux from the client who will be edited
    }
  },
  methods: {
    ...mapActions(['deleteClient', 'updateClient']),
    openModal(cliente) {
    this.editedClient = { ...cliente } // copy client who will be edited
    this.showModal = true
  },
  saveChanges() {
    this.updateClient(this.editedClient) // call vuex
    this.showModal = false               // close modall
  }, 
  closeModal() {
    this.showModal = false
  },
    update(cliente) {
    const newName = prompt("Nombre:", cliente.name)
    const newLastName = prompt("Email:", cliente.lastName)
    const newCountry = prompt("Email:", cliente.country)
    const newEmail = prompt("Email:", cliente.email)
    const newPhoneNumber = prompt("Email:", cliente.phoneNumber)
    
    if (newName && newEmail && newLastName && newCountry && newPhoneNumber) {
      this.updateClient({
        id: cliente.id,
        name: newName,
        lastName: newLastName,
        country: newCountry,
        email: newEmail,
        phoneNumber: newPhoneNumber
      })
    }
  }
  }
}
</script>

