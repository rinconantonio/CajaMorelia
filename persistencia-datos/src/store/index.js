import { createStore } from 'vuex'

export default createStore({
  state: () => ({// returns an objet from the strore
    clients: [// initial list to show in view
      { id: 1, name: 'Juan Antonio', lastName: 'Rincon Alejandre', country: 'México',  email: 'juan@email.com', phoneNumber: '1234567890' },
      { id: 2, name: 'Cristiano Ronaldo', lastName: 'dos Santos Aveiro', country: 'Portugal', email: 'cr7@email.com', phoneNumber: '1234567890' },
      { id: 3, name: 'Lionel Andrés', lastName: 'Messi Cuccittini', country: 'Argentina', email: 'messi@email.com', phoneNumber: '1234567890' }
    ]
  }),
  mutations: {
    addClient(state, client) {

    },
    deleteClient(state, id) {

    },
    updateClient(state, updatedClient) {
    const index = state.clients.findIndex(c => c.id === updatedClient.id)
    if (index !== -1) {
      state.clients[index] = { ...state.clients[index], ...updatedClient }
    }
  }
  },
  actions: {//call the actions from the component
    addClient({ commit }, client) {

    },
    deleteClient({ commit }, id) {

    },
    updateClient({ commit }, client) {
    commit('updateClient', client)
  }
  },
  getters: {
    getAllClients(state) {// return array with all client data
      return state.clients
    }
  }
})
