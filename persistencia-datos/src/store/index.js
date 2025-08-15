import { createStore } from 'vuex'

export default createStore({
  state: () => ({// returns an objet from the strore
    clients: [
        { id: 1, name: 'Juan Antonio', lastName: 'Rincon Alejandre', country: 'México', email: 'juan@email.com', phoneNumber: '1234567890' },
        { id: 2, name: 'Cristiano', lastName: 'Ronaldo dos Santos Aveiro', country: 'Portugal', email: 'cr7@email.com', phoneNumber: '1234567890' },
        { id: 3, name: 'Lionel', lastName: 'Messi Cuccittini', country: 'Argentina', email: 'messi@email.com', phoneNumber: '1234567890' },
        { id: 4, name: 'Neymar', lastName: 'da Silva Santos Júnior', country: 'Brasil', email: 'neymar@email.com', phoneNumber: '1234567890' },
        { id: 5, name: 'Kylian', lastName: 'Mbappé Lottin', country: 'Francia', email: 'mbappe@email.com', phoneNumber: '1234567890' },
        { id: 6, name: 'Mohamed', lastName: 'Salah Ghaly', country: 'Egipto', email: 'salah@email.com', phoneNumber: '1234567890' },
        { id: 7, name: 'Kevin', lastName: 'De Bruyne', country: 'Bélgica', email: 'debruyne@email.com', phoneNumber: '1234567890' },
        { id: 8, name: 'Robert', lastName: 'Lewandowski', country: 'Polonia', email: 'lewandowski@email.com', phoneNumber: '1234567890' },
        { id: 9, name: 'Sergio', lastName: 'Ramos García', country: 'España', email: 'ramos@email.com', phoneNumber: '1234567890' },
        { id: 10, name: 'Luka', lastName: 'Modrić', country: 'Croacia', email: 'modric@email.com', phoneNumber: '1234567890' },
        { id: 11, name: 'Erling', lastName: 'Haaland', country: 'Noruega', email: 'haaland@email.com', phoneNumber: '1234567890' },
        { id: 12, name: 'Harry', lastName: 'Kane', country: 'Inglaterra', email: 'kane@email.com', phoneNumber: '1234567890' }
    ]
  }),
  mutations: {
    addClient(state, client) {
    state.clients.push(client)

    },
    deleteClient(state, id) {
        state.clients = state.clients.filter(c => c.id !== id)
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
    commit('addClient', client)

    },
    deleteClient({ commit }, id) {// filter the array cliet and delete record selected
        commit('deleteClient', id)
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
