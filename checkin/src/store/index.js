const state = {
  msg: 'Select a Seat...',
  fixedPrice: 8,
  Seats: ['A', 'B', 'C', ' ', 'D', 'E', 'F', ' ', 'G', 'H', 'I'],
  seat: '',
  seatPrice: 0,
  totalPrice: 0,
  clickedButton: '',
  isActive: false,
  activeModal: false
}

const getters = {}

const mutations = {
  pickSeat (state, selectedseat) {
    state.seat = selectedseat
  }
}
const actions = {
  selectSeat ({commit}, selectedseat) {
    commit('pickSeat', selectedseat)
    state.clickedButton = state.seat
    state.isActive = true
    if (state.seat[0] == 'A' || state.seat[0] == 'I') {
      state.seatPrice = 10
    }
    if (state.seat[0] == 'C' || state.seat[0] == 'D' || state.seat[0] == 'F' || state.seat[0] == 'G') {
      state.seatPrice = 8
    }
    if (state.seat[0] == 'B' || state.seat[0] == 'E' || state.seat[0] == 'H') {
      state.seatPrice = 5
    }
    if (state.seat[2]) {
      state.seat = state.seat[0] + '-' + state.seat[1] + state.seat[2]
    } else {
      state.seat = state.seat[0] + '-' + state.seat[1]
    }
    state.totalPrice = state.seatPrice + state.fixedPrice
    state.msg = 'Selected Seat:'
    console.log(selectedseat)
    state.activeModal = true
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
