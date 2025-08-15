import { createStore } from 'vuex'

export default createStore({
  state: () => ({// returns an objet from the strore
    clients: [// initial list to show in view
      { id: 1, name: 'Juan Antonio', lastName: 'Rincon Alejandre',  email: 'juan@email.com', phoneNumber: '1234567890' },
      { id: 2, name: 'Cristiano Ronaldo', lastName: 'dos Santos Aveiro', email: 'cr7@email.com', phoneNumber: '1234567890' },
      { id: 3, name: 'Lionel Andrés', lastName: 'Messi Cuccittini', email: 'messi@email.com', phoneNumber: '1234567890' }
    ]
  }),
  mutations: {
    addClient(state, client) {

    },
    deleteClient(state, id) {

    }
  },
  actions: {
    addClient({ commit }, client) {

    },
    deleteClient({ commit }, id) {

    }
  },
  getters: {
    getAllClients(state) {// return array with all client data
      return state.clients
    }
  }
})
